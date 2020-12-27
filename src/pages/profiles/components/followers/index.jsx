import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image,
    Text,
} from 'react-native';
// import { Constants } from 'expo';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import UserImage from '../../../../assets/profile/userImage.png';

import { style } from './styles';

const FirstRoute = () => {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <View style={style.searchContainer}>
                <Octicons name="search" size={25} color="gray" />
                <TextInput
                    placeholder={'Pesquise seguidores...'}
                    style={style.searchText}
                />
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => navigation.navigate('AnotherProfile')}
                >
                    <View style={style.userContainer}>
                        <Image source={UserImage} style={style.userImage} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#212121' }}>
                                @jander.silv
                            </Text>
                            <Text style={{ color: 'gray' }}>Jander Silva</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={style.followerButton}
                            onPress={() => console.log('oi')}
                        >
                            <Text>Remover</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const SecondRoute = () => {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <View style={style.searchContainer}>
                <Octicons name="search" size={25} color="gray" />
                <TextInput
                    placeholder={'Pesquise quem está te seguindo...'}
                    style={style.searchText}
                />
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => navigation.navigate('AnotherProfile')}
                >
                    <View style={style.userContainer}>
                        <Image source={UserImage} style={style.userImage} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#212121' }}>
                                @jander.silv
                            </Text>
                            <Text style={{ color: 'gray' }}>Jander Silva</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={style.followerButton}
                            onPress={() => console.log('oi')}
                        >
                            <Text>Seguindo</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const initialLayout = { width: Dimensions.get('window').width };

export default function Followers(route) {
    const [index, setIndex] = useState(route.route.params.index);
    const [routes] = useState([
        { key: 'first', title: '200 Seguidores' },
        { key: 'second', title: '239 Seguindo' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: 'white' }}
                    style={{ backgroundColor: '#FF7A7A' }}
                    labelStyle={{ color: 'white' }}
                />
            )}
        />
    );
}
