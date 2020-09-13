import React, { useState, useEffect, useMemo } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
    Feather,
    MaterialIcons,
    MaterialCommunityIcons,
} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import DateFunctions from '../../utils/DateFunctions';
import ImagePicker from '../../utils/ImagePicker';
import useDebounce from '../../hooks/useDebounce';
import ApiService from '../../variables/ApiService';

import ErrorMessage from '../../components/ErrorsMessages/RequiredMessage';
import AvatarImage from '../../assets/register/avatarImage.png';
import AvatarFrame from '../../assets/register/avatarFrame.png';

import { style } from './styles';

const Register = () => {
    // state controls
    const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
    const [isFirstPartCompleted, setIsFirstPartCompleted] = useState(true);
    const [isFirstButtonDisabled, setIsFirstButtonDisabled] = useState(true);
    const [isSecondButtonDisabled, setIsSecondButtonDisabled] = useState(true);
    const [isPasswordsEquals, setIsPasswordsEquals] = useState(null);
    // user data
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const debouncedConfirmPassword = useDebounce(confirmPassword, 500);

    const setDate = (event, date) => {
        setDatePickerIsOpen(false);
        setBirthday(date);
    };

    useEffect(() => {
        const CheckFirstPart = () => {
            if (name && user && email && birthday)
                setIsFirstButtonDisabled(false);
        };
        CheckFirstPart();
    }, [image, name, user, email, birthday]);

    useEffect(() => {
        const CheckSecondPart = () => {
            if (password && debouncedConfirmPassword) {
                if (password === debouncedConfirmPassword) {
                    setIsPasswordsEquals(true);
                    setIsSecondButtonDisabled(false);
                } else setIsPasswordsEquals(false);
            } else setIsPasswordsEquals(null);
        };
        CheckSecondPart();
    }, [password, debouncedConfirmPassword]);

    const formSubmit = () => {
        let data = {
            nome: name,
            nome_usuario: user,
            email,
            image_link: '',
            figura_publica: false,
            dt_criacao: new Date(),
            dt_aniversario: birthday,
            senha: password,
        };
        image
            ? ApiService.UploadImage(image)
                  .then(async (UploadImageResponse) => {
                      //   data.image_link = UploadImageResponse.data.path;
                      const registerUserResponse = await ApiService.RegisterUser(
                          data
                      ).catch(() => {
                          //
                      });
                      //   console.log(
                      //       'registerUserResponse: ',
                      //       registerUserResponse
                      //   );
                      navigation.navigate('Login');
                  })
                  .catch(() => {
                      //
                  })
            : ApiService.RegisterUser(data).catch(() => {
                  //
              });
    };

    return (
        // <KeyboardAvoidingView
        //     style={{ flex: 1 }}
        //     behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        // >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient
                style={style.pageBackground}
                colors={['#E95359', '#F17A82']}
                start={[0.5, 0]}
                end={[0.9, 1]}
            >
                {!isFirstPartCompleted ? (
                    <View style={style.formWrapper}>
                        <View style={style.inputsWrapper}>
                            <View style={style.imagePickerContainer}>
                                <ImagePicker
                                    style={{
                                        alignItems: 'center',
                                    }}
                                    setImage={setImage}
                                >
                                    <Image
                                        source={
                                            !image ? AvatarImage : AvatarFrame
                                        }
                                        style={style.avatarFrame}
                                    />
                                    {image && (
                                        <Image
                                            source={{ uri: image }}
                                            style={style.avatarImage}
                                        />
                                    )}
                                </ImagePicker>
                            </View>
                            <View style={style.inputsContainerPartOne}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Feather
                                        name="user"
                                        size={30}
                                        color="#EF6360"
                                    />
                                    <TextInput
                                        style={style.inputText}
                                        placeholder="Nome"
                                        value={name}
                                        onChangeText={setName}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Feather
                                        name="at-sign"
                                        size={30}
                                        color="#EF6360"
                                    />
                                    <TextInput
                                        style={style.inputText}
                                        placeholder="Nome de Usuário"
                                        value={user}
                                        onChangeText={setUser}
                                    />
                                </View>
                                <View
                                    style={{
                                        marginLeft: 2,
                                        flexDirection: 'row',
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        name="email-outline"
                                        size={28}
                                        color="#EF6360"
                                    />
                                    <TextInput
                                        style={style.inputText}
                                        placeholder="Email"
                                        value={email}
                                        onChangeText={setEmail}
                                    />
                                </View>
                                <View>
                                    <TouchableOpacity
                                        onPress={() =>
                                            setDatePickerIsOpen(true)
                                        }
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Feather
                                            name="clock"
                                            size={26}
                                            color="#EF6360"
                                            style={{ marginLeft: 3 }}
                                        />
                                        <Text
                                            style={[
                                                style.inputDate,
                                                !birthday
                                                    ? {
                                                          color: '#BEBEBE',
                                                      }
                                                    : {
                                                          color: 'black',
                                                      },
                                            ]}
                                        >
                                            {birthday
                                                ? DateFunctions.Format(birthday)
                                                : 'Data de Aniversário'}{' '}
                                        </Text>
                                        {datePickerIsOpen && (
                                            <DateTimePicker
                                                mode="date"
                                                value={new Date()}
                                                locale="pt-BR"
                                                onChange={(event, date) =>
                                                    setDate(event, date)
                                                }
                                            />
                                        )}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            disabled={isFirstButtonDisabled}
                            style={[
                                style.goForwardButton,
                                isFirstButtonDisabled
                                    ? style.disabledButton
                                    : null,
                            ]}
                            onPress={() => {
                                setIsFirstPartCompleted(true);
                            }}
                        >
                            <Text
                                style={[
                                    style.goForwardButtonText,
                                    isFirstButtonDisabled
                                        ? style.disabledButtonText
                                        : null,
                                ]}
                            >
                                Avançar
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={[style.formWrapper, { marginTop: 140 }]}>
                        <View style={style.inputsWrapper}>
                            <View style={style.inputsContainerPartTwo}>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialIcons
                                        name="lock-open"
                                        size={30}
                                        color="#EF6360"
                                    />
                                    <TextInput
                                        secureTextEntry
                                        style={style.inputText}
                                        placeholder="Senha"
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <MaterialIcons
                                        name="lock-outline"
                                        size={30}
                                        color="#EF6360"
                                    />
                                    <TextInput
                                        secureTextEntry
                                        style={style.inputText}
                                        placeholder="Confirme sua senha"
                                        value={confirmPassword}
                                        onChangeText={setConfirmPassword}
                                    />
                                </View>
                            </View>
                            {isPasswordsEquals === false && (
                                <ErrorMessage
                                    style={{ alignSelf: 'center' }}
                                    message={'Senhas não iguais'}
                                />
                            )}
                        </View>
                        <View style={style.buttonsContainer}>
                            <TouchableOpacity
                                style={style.goBackButton}
                                onPress={() => setIsFirstPartCompleted(false)}
                            >
                                <Text>Voltar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                disabled={isSecondButtonDisabled}
                                style={[
                                    style.goBackButton,
                                    isSecondButtonDisabled
                                        ? style.disabledButton
                                        : null,
                                ]}
                                onPress={formSubmit}
                            >
                                <Text
                                    style={[
                                        style.createAccountButtonText,
                                        isSecondButtonDisabled
                                            ? style.disabledButtonText
                                            : null,
                                    ]}
                                >
                                    Criar Conta
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                <View style={style.footer}>
                    <Text style={style.footerText}>@Meias? Jamais™</Text>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
        // </KeyboardAvoidingView>
    );
};

export default Register;
