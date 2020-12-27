import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, ImageBackground, StatusBar, FlatList } from 'react-native';
import ApiService from '../../variables/ApiService';

import Post from '../post';

import HeaderBackground from '../../assets/main/headerBackground.png';
import { style } from './styles';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchPosts = async () => {
            try {
                const response = await ApiService.MyFeed();
                setFeed(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) return <Text>Carregando...</Text>;

    return (
        <Fragment>
            <StatusBar backgroundColor="#FF7A7A" barStyle="light-content" />
            <View style={{ flex: 1 }}>
                {/* Header */}
                <ImageBackground
                    source={HeaderBackground}
                    style={style.headerBackground}
                    imageStyle={{ resizeMode: 'stretch' }}
                >
                    <Text style={style.headerTitle}>Meu Feed</Text>
                    <Text style={style.headerDescription}>
                        Veja o que seus amigos desejam comprar e os presenteei
                    </Text>
                </ImageBackground>
                {/* Posts */}
                <FlatList
                    data={feed}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={() => <Post />}
                />
            </View>
        </Fragment>
    );
}
