import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { style } from './styles';
import CategoryIcon from '../../../assets/main/categoryIcon.png';
import ProductImage from '../../../assets/main/productImage.png';

const WishProduct = () => {
    const navigation = useNavigation();

    return (
        <View style={style.productContainer}>
            <TouchableOpacity>
                <View style={style.categoryContainer}>
                    <Image source={CategoryIcon} style={style.categoryIcon} />
                    <Text style={style.categoryText}>Livro</Text>
                </View>
                <Text style={style.productText}>Neurociência Para Leigos</Text>
                <View style={style.buttonsContainer}>
                    <TouchableOpacity>
                        <FontAwesome name="heart-o" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Messages')}
                        style={style.messageContainer}
                    >
                        <Feather
                            name="message-circle"
                            size={20}
                            color="white"
                        />
                        <Text style={style.messageCount}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.giveGiftContainer}>
                        <AntDesign
                            name="checkcircleo"
                            size={20}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.productImageContainer}>
                <Image source={ProductImage} style={style.productImage} />
            </TouchableOpacity>
        </View>
    );
};

export default WishProduct;
