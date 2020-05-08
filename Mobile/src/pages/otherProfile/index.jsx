import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function AnotherProfile() {
    return (
        <View style={{ flex: 1 }}>
            <View style={style.headerBackground}>
                <View style={style.topContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={UserImage}
                            style={{
                                width: 65,
                                height: 65,
                                resizeMode: 'contain',
                            }}
                        />
                        <Text style={style.userName}>Tyler Nyx</Text>
                        <Text style={style.userTag}>@TylerNyx</Text>
                    </View>
                    <View style={style.centerContainer}>
                        <TouchableOpacity style={style.followersWrapper}>
                            <View style={style.followersContainer}>
                                <Text style={style.followersCounter}>24</Text>
                                <FontAwesome5
                                    name="users"
                                    size={15}
                                    color="white"
                                />
                            </View>
                            <Text
                                style={[style.fontFamily, style.followersText]}
                            >
                                Seguidores
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.followersWrapper}>
                            <View style={style.followersContainer}>
                                <Text
                                    style={[
                                        style.fontFamily,
                                        style.followersCounter,
                                    ]}
                                >
                                    30
                                </Text>
                                <FontAwesome5
                                    name="user-friends"
                                    size={15}
                                    color="white"
                                />
                            </View>
                            <Text
                                style={[style.fontFamily, style.followersText]}
                            >
                                Seguindo
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <MaterialIcons
                                name="settings"
                                size={23}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={style.descriptionText}>
                    Quer me enviar um presente e não sabe o que? Essa é uma
                    lista de alguns que eu gostaria de receber.
                </Text>
            </View>
            <View style={{ paddingTop: 20 }}>
                {/* ProductsHeader */}
                <View style={style.wishListHeaderContainer}>
                    <Text style={style.wishListHeaderTitle}>
                        Minha lista de desejos:
                    </Text>
                    <TouchableOpacity style={style.addProductButton}>
                        <FontAwesome5 name="plus" size={15} color="white" />
                        <Text style={style.addProductButtonText}>
                            Adicionar produto
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Wishlist */}
                <View style={style.wishListContainer}>
                    {/* ProductContainer */}
                    <View style={style.productContainer}>
                        <View>
                            <View style={style.categoryContainer}>
                                <Image
                                    source={CategoryIcon}
                                    style={style.categoryIcon}
                                />
                                <Text style={style.categoryText}>Livro</Text>
                            </View>
                            <Text style={style.productText}>
                                Neurociência Para Leigos
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
                                    <Text style={style.messageCount}>10</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={style.productImageContainer}>
                            <Image
                                source={ProductImage}
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
                                    onSelect={() => alert(`Save`)}
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
                                    onSelect={() => alert(`Delete`)}
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
                </View>
            </View>
        </View>
    );
}
