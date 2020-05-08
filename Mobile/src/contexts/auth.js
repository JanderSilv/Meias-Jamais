import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import * as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            // Trocar as buscas abaixo por um MultiGet
            const storagedUser = await AsyncStorage.getItem(
                '@Meias?Jamais:user'
            );
            const storagedToken = await AsyncStorage.getItem(
                '@Meias?Jamais:token'
            );

            // await new Promise((resolve) => setTimeout(resolve, 2000));

            if (storagedUser && storagedToken) {
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }
        loadStoragedData();
    }, []);

    function Login() {
        auth.signIn()
            .then(async (response) => {
                // console.log(response);

                setUser(response.user);

                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${response.token}`;

                await AsyncStorage.setItem(
                    '@Meias?Jamais:user',
                    JSON.stringify(response.user)
                );
                await AsyncStorage.setItem(
                    '@Meias?Jamais:token',
                    response.token
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function Logout() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, Login, Logout, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
