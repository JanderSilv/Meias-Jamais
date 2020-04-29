import React, { Fragment } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import RobotoFamily from '../../utils/RobotoFamily';

// import { Container } from './styles';
import HeaderBackground from '../../assets/main/headerBackground.png';
import AlexBracken from '../../assets/main/alexBracken.png';
import CategoryIcon from '../../assets/main/categoryIcon.png';
import DollarIcon from '../../assets/main/dollarIcon.png';
import DollarIconFilled from '../../assets/main/dollarIconFilled.png';

export default function Home() {
    if (!RobotoFamily()) {
        return <AppLoading />;
    } else {
        return (
            <Fragment>
                <StatusBar backgroundColor="#FF7A7A" barStyle="light-content" />
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={HeaderBackground}
                        style={{
                            width: '100%',
                            height: 228,
                            paddingTop: 20,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white', fontSize: 28 }}>
                            Meu Feed
                        </Text>
                        <Text style={{ marginTop: 10, color: 'white' }}>
                            Veja o que seus amigos desejam comprar e os
                            presenteei
                        </Text>
                    </ImageBackground>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                marginTop: 10,
                                paddingHorizontal: 50,
                                flexDirection: 'row',
                            }}
                        >
                            <Image
                                source={AlexBracken}
                                style={{
                                    width: 54,
                                    height: 54,
                                    borderRadius: 50,
                                }}
                            />
                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontFamily: 'Roboto-Light',
                                    fontSize: 16,
                                }}
                            >
                                Alex Bracken adicionou um novo item na lista de
                                desejos
                            </Text>
                        </View>
                        <View
                            style={{
                                width: '90%',
                                height: 116,
                                marginTop: 10,
                                paddingTop: 10,
                                paddingLeft: 20,
                                borderRadius: 8,
                                backgroundColor: '#FF6B6B',
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    // justifyContent: 'center',
                                }}
                            >
                                <Image
                                    source={CategoryIcon}
                                    style={{
                                        width: 18,
                                        height: 18,
                                        marginTop: 3,
                                    }}
                                />
                                <Text
                                    style={{
                                        marginLeft: 5,
                                        color: 'white',
                                        fontSize: 16,
                                        fontFamily: 'Roboto-Light',
                                    }}
                                >
                                    Livro
                                </Text>
                            </View>
                            <Text
                                style={{
                                    marginTop: 10,
                                    color: 'white',
                                    fontSize: 16,
                                    fontFamily: 'Roboto-Light',
                                }}
                            >
                                Neurociência Para Leigos
                            </Text>
                            <View
                                style={{ marginTop: 20, flexDirection: 'row' }}
                            >
                                <TouchableOpacity>
                                    <FontAwesome
                                        name="heart-o"
                                        size={20}
                                        color="white"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: 20,
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Feather
                                        name="message-circle"
                                        size={20}
                                        color="white"
                                    />
                                    <Text
                                        style={{
                                            marginLeft: 5,
                                            color: 'white',
                                        }}
                                    >
                                        10
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: 15,
                                        flexDirection: 'row',
                                    }}
                                >
                                    <Image
                                        source={DollarIcon}
                                        style={{
                                            width: 18,
                                            height: 23,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Fragment>
        );
    }
}
