import React, { useState } from 'react';
import { BlurView } from 'expo-blur';
import {
    View,
    Picker,
    Modal,
    Text,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TextInput,
    ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { categorys } from './categorys';
import ImagePicker from '../../../utils/ImagePicker';

import { style } from './styles';

export default function AddProduct(props) {
    const { isOpen, onClose } = props;

    const [categorySelected, setCategorySelected] = useState('');
    const [image, setImage] = useState(null);

    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}
        >
            <BlurView tint="dark" intensity={90} style={style.blur}>
                <TouchableHighlight style={style.closeArea} onPress={onClose}>
                    <ScrollView
                        directionalLockEnabled={true}
                        contentContainerStyle={style.modalContainer}
                    >
                        <TouchableWithoutFeedback>
                            <View style={style.modalBackground}>
                                <Text style={style.modalTitle}>
                                    Cadastre um novo produto na sua lista de
                                    desejos
                                </Text>

                                <ImagePicker
                                    style={style.productImageInput}
                                    setImage={setImage}
                                >
                                    {image ? (
                                        <Image
                                            source={{ uri: image }}
                                            style={style.productImage}
                                        />
                                    ) : (
                                        <Feather
                                            name="camera"
                                            size={30}
                                            color="#EF6C61"
                                        />
                                    )}
                                </ImagePicker>
                                <View style={style.inputsContainer}>
                                    <View style={style.inputContainer}>
                                        <Feather
                                            name="tag"
                                            size={30}
                                            color="#EF6C61"
                                        />
                                        <Picker
                                            mode={'dropdown'}
                                            selectedValue={categorySelected}
                                            style={style.Picker}
                                            onValueChange={(
                                                itemValue,
                                                itemIndex
                                            ) => setCategorySelected(itemValue)}
                                        >
                                            {/* <ScrollView> */}
                                            <Picker.Item
                                                label={'Categoria *'}
                                                color={'#ABABAB'}
                                            />
                                            {categorys.map((category) => (
                                                <Picker.Item
                                                    key={category.value}
                                                    label={category.label}
                                                    value={category.value}
                                                />
                                            ))}
                                            {/* </ScrollView> */}
                                        </Picker>
                                    </View>

                                    <View
                                        style={{
                                            marginBottom: 10,
                                            ...style.inputContainer,
                                        }}
                                    >
                                        <Feather
                                            name="gift"
                                            size={30}
                                            color="#EF6C61"
                                        />
                                        <TextInput
                                            style={style.inputText}
                                            placeholder={'Nome do Produto *'}
                                            placeholderTextColor={'#ABABAB'}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Feather
                                            name="link"
                                            size={30}
                                            color="#EF6C61"
                                        />
                                        <TextInput
                                            style={style.inputText}
                                            placeholder={'Link para o Produto'}
                                            placeholderTextColor={'#ABABAB'}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={style.addProductButton}
                                >
                                    <Text style={{ color: 'white' }}>
                                        Adicionar Produto
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </TouchableHighlight>
            </BlurView>
        </Modal>
    );
}
