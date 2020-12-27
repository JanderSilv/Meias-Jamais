import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AlexBracken from '../../assets/main/alexBracken.png';
import WishProduct from '../../components/wishProductsComponents/anotherProfile&Home';

import { style } from './styles';

const Post = () => {
    const navigation = useNavigation();

    return (
        <View style={style.postContainer}>
            {/* PostTitle */}
            <View style={style.postDescriptionContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('AnotherProfile')}
                >
                    <Image source={AlexBracken} style={style.userImage} />
                </TouchableOpacity>
                <Text style={style.postDescription}>
                    Alex Bracken adicionou um novo item na lista de desejos
                </Text>
            </View>
            {/* ProductContainer */}
            <WishProduct />
        </View>
    );
};

export default Post;
