import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api, AuthApi, TypeUser } from '../services';

type AuthContextData = {
    signed: boolean;
    user: TypeUser | null;
    loading: boolean;
    Login(data: TypeUser): void;
    Logout(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const storageKey = '@Meias?Jamais';
    const [user, setUser] = useState<TypeUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStoragedData = async () => {
            // Trocar as buscas abaixo por um MultiGet
            const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
                `${storageKey}:user`,
                `${storageKey}:token`,
            ]);

            if (storagedUser[1] && storagedToken[1]) {
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser[1]));
                setLoading(false);
            } else return;
        };
        loadStoragedData();
    }, []);

    const Login = async (data: TypeUser) => {
        const response = await AuthApi.Login(data);

        api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;

        const storageUser = [
            `${storageKey}:user`,
            JSON.stringify(response.data.user),
        ];
        const storageToken = [`${storageKey}:token`, response.data.token];

        await AsyncStorage.multiSet([storageUser, storageToken]);
        setUser(response.data.user);
    };

    const Logout = () => {
        api.defaults.headers['Authorization'] = null;
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    };

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, Login, Logout, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
