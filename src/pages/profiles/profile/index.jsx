import React, { useState, useContext, useMemo, useEffect } from 'react';
import {
    Alert,
    View,
    Image,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {
    FontAwesome5,
    MaterialIcons,
    FontAwesome,
    Feather,
} from '@expo/vector-icons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';

import { style, triggerStyles, optionsStyles } from './styles';

import AuthContext from '../../../contexts/auth';
import ApiService from '../../../variables/ApiService';

import AddProduct from './addProduct';
import EditProduct from './editProduct';
import CategoryIcon from '../../../assets/main/categoryIcon.png';
import ProductImage from '../../../assets/main/productImage.png';

const Header = () => {
    const { Logout, user } = useContext(AuthContext);

    const navigation = useNavigation();
    return (
        <View style={style.headerBackground}>
            <View style={style.topContainer}>
                <View
                    style={{
                        alignItems: 'center',
                        maxwidth: 100,
                    }}
                >
                    <Image
                        source={{ uri: user.image_link }}
                        style={style.userImage}
                    />
                </View>
                <View style={style.centerContainer}>
                    <TouchableOpacity
                        style={style.followersWrapper}
                        onPress={() =>
                            navigation.navigate('Followers', { index: 0 })
                        }
                    >
                        <View style={style.followersContainer}>
                            <Text style={style.followersCounter}>30</Text>
                            <FontAwesome5
                                name="users"
                                size={15}
                                color="white"
                            />
                        </View>
                        <Text style={[style.fontFamily, style.followersText]}>
                            {30 > 1 ? 'Seguidores' : 'Seguidor'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.followersWrapper}
                        onPress={() =>
                            navigation.navigate('Followers', { index: 1 })
                        }
                    >
                        <View style={style.followersContainer}>
                            <Text
                                style={[
                                    style.fontFamily,
                                    style.followersCounter,
                                ]}
                            >
                                50
                            </Text>
                            <FontAwesome5
                                name="user-friends"
                                size={15}
                                color="white"
                            />
                        </View>
                        <Text style={[style.fontFamily, style.followersText]}>
                            Seguindo
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={Logout}>
                        <MaterialIcons
                            name="settings"
                            size={23}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 5 }}>
                <Text style={style.userName}>{user.nome}</Text>
                <Text style={style.userTag}>{`@${user.nome_usuario}`}</Text>
            </View>
            <Text style={style.descriptionText}>{user.descricao}</Text>
        </View>
    );
};

export default function Profile() {
    const { user } = useContext(AuthContext);

    const [followers, setFollowers] = useState({});
    const [following, setFollowing] = useState({});
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState({});
    const [reloadPosts, setReloadPosts] = useState(false);

    useEffect(() => {
        ApiService.MyPosts().then((response) => {
            setPosts(response.data);
        });
        //     ApiService.GetFollowers().then((response) => {
        //         // console.log('GetFollowers_success:', response);
        //         setFollowers(response.data);
        //     });
        //     ApiService.GetFollowing().then((response) => {
        //         // console.log('GetFollowing_success:', response);
        //         setFollowing(response.data);
        //     });
    }, [reloadPosts]);

    //#region ModalsSetup
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false);

    const handleOpenAddProductModal = () => {
        setShowAddProduct(true);
    };
    const handleCloseAddProductModal = () => {
        setShowAddProduct(false);
    };

    const handleOpenEditProductModal = (current_post) => {
        setCurrentPost(current_post);
        setShowEditProduct(true);
    };
    const handleCloseEditProductModal = () => {
        setShowEditProduct(false);
    };

    const AddProductModal = useMemo(() => {
        return (
            <AddProduct
                isOpen={showAddProduct}
                onClose={handleCloseAddProductModal}
                reloadPosts={reloadPosts}
                setReloadPosts={setReloadPosts}
            />
        );
    }, [showAddProduct]);

    const EditProductModal = useMemo(() => {
        return (
            <EditProduct
                isOpen={showEditProduct}
                onClose={handleCloseEditProductModal}
                current={currentPost}
                reloadPosts={reloadPosts}
                setReloadPosts={setReloadPosts}
            />
        );
    }, [showEditProduct, currentPost]);
    //#endregion

    const handleDeletePost = (product_id = 0) =>
        Alert.alert(
            'Deletar Post',
            `Você quer realmente me apagar, ${user.nome.split(' ')[0]}?`,
            [
                {
                    text: 'Não, te amo',
                    style: 'cancel',
                },
                {
                    text: 'Sim, adeus!',
                    onPress: async () => {
                        await ApiService.RemovePost(product_id).catch(() => {
                            return;
                            // alert de erro
                        }),
                            setReloadPosts(!reloadPosts);
                    },
                },
                { cancelable: false },
            ]
        );

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 1, paddingTop: 20 }}>
                {/* ProductsHeader */}
                <View style={style.wishListHeaderContainer}>
                    <Text style={style.wishListHeaderTitle}>
                        Minha lista de desejos:
                    </Text>
                    <TouchableOpacity
                        style={style.addProductButton}
                        onPress={handleOpenAddProductModal}
                    >
                        <FontAwesome5 name="plus" size={15} color="white" />
                        <Text style={style.addProductButtonText}>
                            Adicionar produto
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Wishlist */}

                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={style.wishListContainer}
                    renderItem={({ item, index }) => (
                        <View style={style.productContainer}>
                            <View style={{ flex: 1 }}>
                                <View style={style.categoryContainer}>
                                    <Image
                                        source={CategoryIcon}
                                        style={style.categoryIcon}
                                    />
                                    <Text style={style.categoryText}>
                                        Livro
                                    </Text>
                                </View>
                                <Text style={style.productTitle}>
                                    {item.produto_nome}
                                </Text>
                                <Text style={style.productDescription}>
                                    {item.produto_descricao}
                                </Text>
                                <View style={style.buttonsContainer}>
                                    <TouchableOpacity>
                                        <FontAwesome
                                            name="heart-o"
                                            size={20}
                                            color="white"
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={style.messageContainer}
                                    >
                                        <Feather
                                            name="message-circle"
                                            size={20}
                                            color="white"
                                        />
                                        <Text style={style.messageCount}>
                                            10
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={style.productImageContainer}
                            >
                                <Image
                                    source={
                                        item.produto_image
                                            ? {
                                                  uri: item.produto_image,
                                              }
                                            : ProductImage
                                    }
                                    style={style.productImage}
                                />
                            </TouchableOpacity>
                            <Menu>
                                <MenuTrigger customStyles={triggerStyles}>
                                    <Feather
                                        name="more-vertical"
                                        size={20}
                                        color="white"
                                    />
                                </MenuTrigger>
                                <MenuOptions customStyles={optionsStyles}>
                                    <MenuOption
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-evenly',
                                        }}
                                        onSelect={() =>
                                            handleOpenEditProductModal(item)
                                        }
                                    >
                                        <FontAwesome5
                                            name="pencil-alt"
                                            size={18}
                                            color="#535353"
                                        />
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                                color: '#535353',
                                                fontSize: 16,
                                            }}
                                        >
                                            Editar
                                        </Text>
                                    </MenuOption>
                                    <MenuOption
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-evenly',
                                        }}
                                        onSelect={() =>
                                            handleDeletePost(item.id)
                                        }
                                    >
                                        <MaterialIcons
                                            name="delete-forever"
                                            size={25}
                                            color="#FF6B6B"
                                        />
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                                color: '#FF6B6B',
                                                fontSize: 16,
                                            }}
                                        >
                                            Excluir
                                        </Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </View>
                    )}
                />
            </View>
            {EditProductModal}
            {AddProductModal}
        </View>
    );
}
