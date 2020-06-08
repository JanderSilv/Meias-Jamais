import React, { Fragment, useState, useEffect, useContext } from 'react';
import {
    View,
    Image,
    ImageBackground,
    TextInput,
    Text,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';

import AuthContext from '../../contexts/auth';
import RobotoFamily from '../../utils/RobotoFamily';

import { style } from './styles';
import Logo from '../../assets/logo/logo.png';
import InputBackground from '../../assets/login/inputBackground.png';
import RequiredMessage from '../../components/ErrorsMessages/RequiredMessage';

export default function Login() {
    const { signed, user, Login } = useContext(AuthContext);

    const navigation = useNavigation();

    const { register, handleSubmit, setValue, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });

    useEffect(() => {
        register({ name: 'user' }, { required: true });
        register({ name: 'password' }, { required: true });
    }, [register]);

    function handleLogin(data) {
        Login(data);
    }

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
                            <Feather name="user" size={40} color="#EF6360" />
                        </ImageBackground>
                        <TextInput
                            placeholder="Email ou Usuário"
                            placeholderTextColor="#F5F5F5"
                            style={[style.inputText, style.fontFamily]}
                            onChangeText={(text) => setValue('user', text)}
                        />
                    </View>
                    {errors.user && (
                        <RequiredMessage
                            style={{
                                alignSelf: 'flex-start',
                                marginLeft: 30,
                            }}
                        />
                    )}

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
                            onChangeText={(text) => setValue('password', text)}
                        />
                    </View>
                    {errors.password && (
                        <RequiredMessage
                            style={{
                                alignSelf: 'flex-start',
                                marginLeft: 30,
                            }}
                        />
                    )}

                    <TouchableOpacity
                        onPress={handleSubmit(handleLogin)}
                        style={style.logInButton}
                    >
                        <Text style={[style.fontFamily, style.logInButtonText]}>
                            Entrar
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* SignIn */}
                <View style={style.signInContainer}>
                    <Text style={style.signInDescription}>
                        Não tem uma conta?{' '}
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                        style={style.fontFamily}
                    >
                        <Text
                            style={[style.fontFamily, style.signInButtonText]}
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
