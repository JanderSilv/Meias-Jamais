import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import api from '../services/api';
import ApiService from '../variables/ApiService';

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

            if (storagedToken) {
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${storagedToken}`;
                setUser(JSON.parse(storagedUser));
                setLoading(false);
            }
        }
        loadStoragedData();
    }, []);

    function Login(data) {
        return ApiService.Login(data)
            .then(async (response) => {
                // console.log(response);
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${response.data.token}`;

                await AsyncStorage.setItem(
                    '@Meias?Jamais:token',
                    response.data.token
                );

                const UserResponse = await ApiService.GetUserData();

                await AsyncStorage.setItem(
                    '@Meias?Jamais:user',
                    JSON.stringify(UserResponse.data[0])
                );
            })
            .catch((error) => {
                // console.log(error);
                return Promise.reject(error);
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
