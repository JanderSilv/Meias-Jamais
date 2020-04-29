import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/login';
import Home from './pages/home';

export default function Routes() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    function Main() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
