import React, { Fragment } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { style } from './styles';
import HeaderBackground from '../../assets/main/headerBackground.png';
import WishProduct from '../../components/wishProductsComponents/anotherProfile&Home';

import AlexBracken from '../../assets/main/alexBracken.png';

export default function Home() {
    const navigation = useNavigation();

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
                <View style={style.postContainer}>
                    {/* PostTitle */}
                    <View style={style.postDescriptionContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('AnotherProfile')
                            }
                        >
                            <Image
                                source={AlexBracken}
                                style={style.userImage}
                            />
                        </TouchableOpacity>
                        <Text style={style.postDescription}>
                            Alex Bracken adicionou um novo item na lista de
                            desejos
                        </Text>
                    </View>
                    {/* ProductContainer */}
                    <WishProduct />
                </View>
            </View>
        </Fragment>
    );
}
