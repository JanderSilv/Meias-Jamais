import React, { Fragment, useState, useEffect } from 'react';
import {
    View,
    Image,
    ImageBackground,
    TextInput,
    Text,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import RobotoFamily from '../../utils/RobotoFamily';
import Constants from 'expo-constants';

import { style } from './styles';
import Logo from '../../assets/logo/logo.png';
import InputBackground from '../../assets/login/inputBackground.png';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function handleLogin() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
    }

    if (!RobotoFamily()) {
        return <AppLoading />;
    } else {
        return (
            <Fragment>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle="light-content"
                />
                <LinearGradient
                    style={{
                        flex: 1,
                        paddingTop: Constants.statusBarHeight + 40,
                    }}
                    colors={['#EF7462', '#ED3859']}
                    start={[0.5, 0]}
                    end={[0.9, 1]}
                >
                    <Image source={Logo} style={style.logo} />
                    {/* Inputs */}
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <View style={style.inputContainer}>
                            <ImageBackground
                                source={InputBackground}
                                style={style.inputBackground}
                                imageStyle={{
                                    resizeMode: 'contain',
                                }}
                            >
                                <Feather
                                    name="user"
                                    size={40}
                                    color="#EF6360"
                                />
                            </ImageBackground>
                            <TextInput
                                placeholder="Email ou Usuário"
                                placeholderTextColor="#F5F5F5"
                                style={[style.inputText, style.fontFamily]}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>

                        <View style={[style.inputContainer, { marginTop: 20 }]}>
                            <ImageBackground
                                source={InputBackground}
                                style={style.inputBackground}
                                imageStyle={{
                                    resizeMode: 'contain',
                                }}
                            >
                                <MaterialIcons
                                    name="lock-open"
                                    style={{ transform: [{ scaleX: -1 }] }}
                                    size={40}
                                    color="#EF6360"
                                />
                            </ImageBackground>
                            <TextInput
                                style={[style.inputText, style.fontFamily]}
                                secureTextEntry={true}
                                placeholder="Senha"
                                placeholderTextColor="#F5F5F5"
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={handleLogin}
                            style={style.logInButton}
                        >
                            <Text
                                style={[
                                    style.fontFamily,
                                    style.logInButtonText,
                                ]}
                            >
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* SignIn */}
                    <View style={style.signInContainer}>
                        <Text style={style.signInDescription}>
                            Não tem uma conta?{' '}
                        </Text>
                        <TouchableOpacity style={style.fontFamily}>
                            <Text
                                style={[
                                    style.fontFamily,
                                    style.signInButtonText,
                                ]}
                            >
                                Cadastre-se
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* ForgotPassword */}
                    <View style={{ marginTop: 70, alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Text style={style.forgotPassword}>
                                Esqueceu a senha?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </Fragment>
        );
    }
}
