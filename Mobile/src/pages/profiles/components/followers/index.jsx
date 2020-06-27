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

// import { Container } from './styles';

const FirstRoute = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.scene}>
            <View
                style={{
                    width: '90%',
                    marginTop: 20,
                    paddingBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#FF6B6B',
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}
            >
                <Octicons name="search" size={25} color="gray" />
                <TextInput
                    placeholder={'Pesquise seguidores...'}
                    style={{
                        width: '80%',
                        marginLeft: 15,
                        color: '#212121',
                    }}
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
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Image
                            source={UserImage}
                            style={{
                                width: 54,
                                height: 54,
                                borderRadius: 50,
                            }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: '#212121' }}>
                                @jander.silv
                            </Text>
                            <Text style={{ color: 'gray' }}>Jander Silva</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                paddingVertical: 3,
                                paddingHorizontal: 5,
                                borderWidth: 1,
                                borderColor: 'gray',
                                borderRadius: 7,
                            }}
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

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function Followers() {
    const [index, setIndex] = useState(0);
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

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
});
