import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import Home from '../pages/home';
import Messages from '../pages/post/messages';
import Contacts from '../pages/contacts';
import Profile from '../pages/profile';
import AnotherProfile from '../pages/anotherProfile';

export default function AppRoutes() {
    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    function TabsPages() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 14 },
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen
                    name="HomeScreen"
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
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ focused }) => {
                            const color = focused ? '#EF6360' : 'gray';
                            return (
                                <FontAwesome5
                                    solid
                                    name="user"
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
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={TabsPages}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AnotherProfile"
                component={AnotherProfile}
                options={{
                    title: 'Perfil de Wassim',
                    headerTintColor: '#F5F5F5',
                    headerStyle: { backgroundColor: '#FF7A7A' },
                }}
            />
            <Stack.Screen
                name="Messages"
                component={Messages}
                options={{
                    title: 'Comentários',
                    headerTintColor: '#F5F5F5',
                    headerStyle: { backgroundColor: '#FF7A7A' },
                }}
            />
        </Stack.Navigator>
    );
}
