import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import WishProduct from '../../../components/wishProductsComponents/anotherProfile&Home';

import { style } from './styles';
import UserImage from '../../../assets/anotherProfile/wassimChouak.png';

export default function AnotherProfile() {
    return (
        <View style={{ flex: 1 }}>
            <View style={style.headerBackground}>
                <View style={style.topContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={UserImage} style={style.userImage} />
                    </View>
                    <View style={style.centerContainer}>
                        <TouchableOpacity style={style.followersWrapper}>
                            <View style={style.followersContainer}>
                                <Text style={style.followersCounter}>24</Text>
                                <FontAwesome5
                                    name="users"
                                    size={15}
                                    color="white"
                                />
                            </View>
                            <Text
                                style={[style.fontFamily, style.followersText]}
                            >
                                Seguidores
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.followersWrapper}>
                            <View style={style.followersContainer}>
                                <Text
                                    style={[
                                        style.fontFamily,
                                        style.followersCounter,
                                    ]}
                                >
                                    30
                                </Text>
                                <FontAwesome5
                                    name="user-friends"
                                    size={15}
                                    color="white"
                                />
                            </View>
                            <Text
                                style={[style.fontFamily, style.followersText]}
                            >
                                Seguindo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={style.userName}>Wassim Chouak</Text>
                    <Text style={style.userTag}>@WassimChouak</Text>
                </View>
                <Text style={style.descriptionText}>
                    Quer me enviar um presente e não sabe o que? Essa é uma
                    lista de alguns que eu gostaria de receber.
                </Text>
                <View style={style.followButtonContainer}>
                    <TouchableOpacity style={style.followButton}>
                        <Text style={style.followButtonText}>Seguir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                {/* ProductsHeader */}
                <View style={style.wishListHeaderContainer}>
                    <Text style={style.wishListHeaderTitle}>
                        Lista de desejo de Wassim:
                    </Text>
                </View>
                {/* Wishlist */}
                <View style={style.wishListContainer}>
                    {/* ProductContainer */}
                    <WishProduct />
                </View>
            </View>
        </View>
    );
}
