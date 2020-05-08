import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import Login from '../pages/login';

export default function AuthRoutes() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    );
}
