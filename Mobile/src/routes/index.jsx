import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import RobotoFamily from '../utils/RobotoFamily';

const Routes = () => {
    const { signed, loading } = useContext(AuthContext);

    //modificar para esperar na SplashScreen
    //react-native-splash-screen

    if (!RobotoFamily() && !loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItem: 'center',
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        return signed ? <AppRoutes /> : <AuthRoutes />;
    }
};

export default Routes;
