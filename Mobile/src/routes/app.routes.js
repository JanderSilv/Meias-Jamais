import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import Home from '../pages/home';
import Messages from '../pages/post/messages';
import Contacts from '../pages/contacts';
import Notifications from '../pages/notifications';
import Profile from '../pages/profile';
import AnotherProfile from '../pages/anotherProfile';

export default function AppRoutes() {
    function getRouteName(route) {
        // Access the tab navigator's state using `route.state`
        const routeName = route.state
            ? // Get the currently active route name in the tab navigator
              route.state.routes[route.state.index].name
            : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
              // In our case, it's "Feed" as that's the first screen inside the navigator
              route.params?.screen || 'Home';

        switch (routeName) {
            case 'Home':
                return 'Home';
            case 'Contacts':
                return 'Contacts';
            case 'Notifications':
                return 'Notificações';
            case 'Profile':
                return 'Profile';
        }
    }

    const Tab = createBottomTabNavigator();
    const Stack = createStackNavigator();

    function TabsPages({ navigation, route }) {
        useLayoutEffect(() => {
            const routeName = getRouteName(route);
            if (routeName === 'Notificações')
                navigation.setOptions({
                    headerShown: true,
                    headerTitle: routeName,
                });
            else
                navigation.setOptions({
                    headerShown: false,
                });
        }, [navigation, route]);

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
                    name="Notifications"
                    component={Notifications}
                    options={{
                        title: 'Notificações',
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? '#EF6360' : 'gray';
                            return (
                                <FontAwesome
                                    name="bell"
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
            <Stack.Screen name="Home" component={TabsPages} />
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
