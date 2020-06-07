import React, { useState, Fragment } from 'react';
import { TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

// import { Container } from './styles';

/**
 *  Pega uma imagem do celular.
 * @param {Object} style - Recebe a stylização do componente.
 * @param {setState} setImage - Recebe a função estado que armazena a imagem.
 **/
export default function ImagePickerComponent(props) {
    const { setImage, style } = props;

    useState(() => {
        const getPermissionAsync = async () => {
            if (Constants.platform.ios) {
                const { status } = await Permissions.askAsync(
                    Permissions.CAMERA_ROLL
                );
                if (status !== 'granted') {
                    alert(
                        'Desculpa, precisamos da permissão da câmera para seguirmos!'
                    );
                }
            }
        };
        getPermissionAsync();
    }, []);

    const PickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri);
            }
            // console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    return (
        <TouchableOpacity onPress={PickImage} style={style}>
            {props.children}
        </TouchableOpacity>
    );
}
