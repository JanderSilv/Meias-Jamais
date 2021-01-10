import React, { Fragment, useEffect, useState } from 'react';
import { View, Text, ImageBackground, StatusBar, FlatList } from 'react-native';

import { TypePost } from '../../services/models/post';
import Post from '../post';
import HeaderBackground from '../../assets/main/headerBackground.png';
import { style } from './styles';

import { feed as feedData } from '../../utils/data/feed';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [feed, setFeed] = useState<Array<TypePost>>([]);

    useEffect(() => {
        setLoading(true);
        const fetchPosts = async () => {
            try {
                // const response = await ApiService.MyFeed();
                // setFeed(response.data);
                setFeed(feedData);
            } catch (error) {
                console.log('Home_FetchPosts: ', error.message);
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
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 32 }} />
                    )}
                    renderItem={(post) => <Post post={post.item} />}
                />
            </View>
        </Fragment>
    );
}
