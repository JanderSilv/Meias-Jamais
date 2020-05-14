import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { AppLoading } from 'expo';

const Routes = () => {
    const { signed, loading } = useContext(AuthContext);

    //modificar para esperar na SplashScreen
    //react-native-splash-screen
    // if (loading) {
    // return <AppLoading />;
    // }

    return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
