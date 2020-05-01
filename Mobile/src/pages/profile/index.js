import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import { style } from './styles';
import UserImage from '../../assets/profile/userImage.png';

export default function Profile() {
    return (
        <View style={{ flex: 1 }}>
            <View style={style.headerBackground}>
                <View style={style.topContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={UserImage}
                            style={{
                                width: 65,
                                height: 65,
                                resizeMode: 'contain',
                            }}
                        />
                        <Text style={style.userName}>Tyler Nyx</Text>
                        <Text style={style.userTag}>@TylerNyx</Text>
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
                    <View>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="settings"
                                size={23}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={style.descriptionText}>
                    Quer me enviar um presente e não sabe o que? Essa é uma
                    lista de alguns que eu gostaria de receber.
                </Text>
            </View>
        </View>
    );
}
