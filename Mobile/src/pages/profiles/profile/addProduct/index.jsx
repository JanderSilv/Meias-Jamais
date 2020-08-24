import React, { useState, useContext, useEffect } from 'react';
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
    StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import AuthContext from '../../../../contexts/auth';
import ApiService from '../../../../variables/ApiService';
import { categorys } from '../../../../utils/productCategorys';
import ImagePicker from '../../../../utils/ImagePicker';

import { style } from './styles';

export default function AddProduct(props) {
    const { user } = useContext(AuthContext);
    const { isOpen, onClose, reloadPosts, setReloadPosts } = props;

    const [image, setImage] = useState(null);
    const [categorySelected, setCategorySelected] = useState('');
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const checkInputs = () => {
            name && categorySelected
                ? setIsDisabled(false)
                : setIsDisabled(true);
        };
        checkInputs();
    }, [name, categorySelected]);

    const clearForm = () => {
        setImage(null);
        setCategorySelected('');
        setName('');
        setLink('');
        setDescription('');
        setIsDisabled(false);
    };

    const handleSubmit = () => {
        let product = {
            produto_nome: name,
            categoria: categorySelected,
            produto_descricao: description,
            produto_link: link,
            produto_image: '',
            recebido: '',
        };

        image
            ? ApiService.UploadImage(image).then(async (response) => {
                  (product.produto_image = response.data.url),
                      await ApiService.CreatePost(product).catch(() => {
                          return;
                          // deletar imagem
                      });
                  onClose();
                  clearForm();
                  setReloadPosts(!reloadPosts);
              })
            : ApiService.CreatePost(product).then(() => {
                  onClose();
                  clearForm();
                  setReloadPosts(!reloadPosts);
              });
        // .catch(() =>
        //       console.log('caí aqui')
        //   );
    };

    return (
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}
        >
            <StatusBar hidden translucent />
            <BlurView tint="dark" intensity={90} style={style.blur}>
                <TouchableHighlight style={style.closeArea} onPress={onClose}>
                    <ScrollView
                        directionalLockEnabled={true}
                        contentContainerStyle={style.modalContainer}
                    >
                        <TouchableWithoutFeedback>
                            <View style={style.modalBackground}>
                                <Text style={style.modalTitle}>
                                    Adicionar item na sua lista de desejos:
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
                                        </Picker>
                                    </View>

                                    <View style={style.inputContainer}>
                                        <Feather
                                            name="gift"
                                            size={30}
                                            color="#EF6C61"
                                        />
                                        <TextInput
                                            style={style.inputText}
                                            placeholder={'Nome do Produto *'}
                                            placeholderTextColor={'#ABABAB'}
                                            value={name}
                                            onChangeText={setName}
                                        />
                                    </View>
                                    <View style={style.inputContainer}>
                                        <Feather
                                            name="link"
                                            size={30}
                                            color="#EF6C61"
                                        />
                                        <TextInput
                                            style={style.inputText}
                                            placeholder={'Link para o Produto'}
                                            placeholderTextColor={'#ABABAB'}
                                            value={link}
                                            onChangeText={setLink}
                                        />
                                    </View>
                                    <View>
                                        <TextInput
                                            multiline
                                            numberOfLines={4}
                                            maxLength={190}
                                            style={{
                                                marginLeft: 0,
                                                paddingTop: 5,
                                                paddingLeft: 5,

                                                fontSize: 16,
                                                color: '#707070',
                                                textAlignVertical: 'top',

                                                borderColor: '#b8b8b8',
                                                borderWidth: 0.8,
                                                borderRadius: 3,
                                            }}
                                            placeholder={'Descrição do Produto'}
                                            placeholderTextColor={'#ABABAB'}
                                            value={description}
                                            onChangeText={setDescription}
                                        />
                                    </View>
                                </View>
                                <TouchableOpacity
                                    style={
                                        isDisabled
                                            ? {
                                                  ...style.addProductButton,
                                                  backgroundColor: 'gray',
                                              }
                                            : style.addProductButton
                                    }
                                    disabled={isDisabled}
                                    onPress={handleSubmit}
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
