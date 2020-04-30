import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import Login from './pages/login';
import Home from './pages/home';
import Contacts from './pages/contacts';

export default function Routes() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    function Main() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 14 },
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Início',
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? '#EF6360' : 'gray';
                            return (
                                <FontAwesome5
                                    name="home"
                                    size={25}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Contacts"
                    component={Contacts}
                    options={{
                        title: 'Contatos',
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? '#EF6360' : 'gray';
                            return (
                                <FontAwesome
                                    name="heart"
                                    size={23}
                                    color={color}
                                />
                            );
                        },
                    }}
                />
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
