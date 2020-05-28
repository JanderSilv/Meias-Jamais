import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Register from '../pages/register';

export default function AuthRoutes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Cadastro',
                    headerTintColor: '#F5F5F5',
                    headerStyle: { backgroundColor: '#E95359' },
                }}
            />
        </Stack.Navigator>
    );
}
