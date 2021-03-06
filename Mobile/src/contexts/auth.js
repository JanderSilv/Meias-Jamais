import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import api from '../services/api';
import ApiService, { setUserId } from '../variables/ApiService';

const AuthContext = createContext({ signed: false, user: {} });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            // Trocar as buscas abaixo por um MultiGet
            let storagedUser = await AsyncStorage.getItem('@Meias?Jamais:user');
            const storagedToken = await AsyncStorage.getItem(
                '@Meias?Jamais:token'
            );

            storagedUser = JSON.parse(storagedUser);

            if (storagedToken) {
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${storagedToken}`;
                setUser(storagedUser);
                setUserId(storagedUser.id);
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

                const userResponse = await ApiService.GetUserData();

                await AsyncStorage.setItem(
                    '@Meias?Jamais:user',
                    JSON.stringify(userResponse.data)
                );

                setUserId(userResponse.data.id);
                setUser(userResponse.data);
            })
            .catch((error) => {
                // console.log(error);
                return Promise.reject(error);
            });
    }

    function Logout() {
        api.defaults.headers['Authorization'] = null;
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
