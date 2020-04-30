import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { AppLoading } from 'expo';
import { Octicons } from '@expo/vector-icons';
import RobotoFamily from '../../utils/RobotoFamily';

import { style } from './styles';
import HeaderBackground from '../../assets/contacts/headerBackground.png';
import UserImage from '../../assets/contacts/userImage.png';

export default function Contacts() {
    if (!RobotoFamily()) {
        return <AppLoading />;
    } else {
        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <ImageBackground
                    source={HeaderBackground}
                    style={style.headerBackground}
                >
                    <Text style={[style.fontFamily, style.headerTitle]}>
                        Meus Contatos
                    </Text>
                    <Text style={style.headerDescription}>
                        Selecione um amigo para visualizar o perfil
                    </Text>
                </ImageBackground>
                <View style={style.contactsContainer}>
                    {/* Search */}
                    <View style={{ alignItems: 'center' }}>
                        <View style={style.searchContainer}>
                            <View style={style.searchIconBackground}>
                                <Octicons
                                    name="search"
                                    size={25}
                                    color="white"
                                />
                            </View>
                            <TextInput style={style.searchInputText} />
                        </View>
                    </View>
                    {/* Contacts */}
                    <View style={{ paddingTop: 30, paddingHorizontal: 20 }}>
                        <TouchableOpacity style={style.userContainer}>
                            <Image source={UserImage} style={style.userImage} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={style.userText}>@NyanaStoica</Text>
                                <Text
                                    style={[style.userText, { marginTop: 3 }]}
                                >
                                    NyanaStoica
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
