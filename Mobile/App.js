import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';

import Routes from './src/routes/index';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
    return (
        <MenuProvider>
            <NavigationContainer>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </NavigationContainer>
        </MenuProvider>
    );
}
