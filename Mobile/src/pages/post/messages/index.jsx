import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

import { style } from './styles';

import AlexBracken from '../../../assets/main/alexBracken.png';
import CategoryIcon from '../../../assets/main/categoryIcon.png';
import ProductImage from '../../../assets/main/productImage.png';

export default function messages() {
    const [message, setMessage] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <View style={style.postContainer}>
                <View style={style.postDescriptionContainer}>
                    <Image source={AlexBracken} style={style.userImage} />
                    <Text style={style.postDescription}>
                        <Text
                            style={{
                                color: 'black',
                            }}
                        >
                            Alex Bracken{' '}
                        </Text>
                        adicionou um novo item na lista de desejos
                    </Text>
                </View>
                <View style={style.productContainer}>
                    <View style={{ justifyContent: 'center' }}>
                        <View style={style.categoryContainer}>
                            <Image
                                source={CategoryIcon}
                                style={style.categoryIcon}
                            />
                            <Text style={style.categoryText}>Livro</Text>
                        </View>
                        <Text style={style.productText}>
                            Neurociência Para Leigos
                        </Text>
                    </View>
                    <TouchableOpacity style={style.productImageContainer}>
                        <Image
                            source={ProductImage}
                            style={style.productImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.postTime}>
                <Feather name="clock" size={16} color="#A5A5A5" />
                <Text style={style.postTimeText}>2 dias atrás</Text>
            </View>
            <View style={style.likeContainer}>
                <TouchableOpacity style={style.likeButton}>
                    <FontAwesome name="heart-o" size={18} color="#707070" />
                    <Text style={style.likeText}>Curtir</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={style.messageContainer}>
                    <TouchableOpacity>
                        <Image source={AlexBracken} style={style.userImage} />
                    </TouchableOpacity>
                    <View style={style.messageDataContainer}>
                        <TouchableOpacity>
                            <Text style={style.messageUser}>@Jander.Silv</Text>
                        </TouchableOpacity>
                        <Text style={style.messageText}>
                            Quero um desse também
                        </Text>
                        <Text style={style.messageTime}>Agora há pouco</Text>
                    </View>
                </View>
            </View>
            <View style={style.messageInputWrapper}>
                <View style={style.messageInputContainer}>
                    <TextInput
                        style={style.messageInputText}
                        placeholder={'Deixe um comentário...'}
                        placeholderTextColor={'#929292'}
                        value={message}
                        onChangeText={setMessage}
                    />
                    <TouchableOpacity disabled={!message ? true : false}>
                        <MaterialIcons
                            name="send"
                            size={25}
                            color={message ? '#FF6B6B' : '#929292'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
