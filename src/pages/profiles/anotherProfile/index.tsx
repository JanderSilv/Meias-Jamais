import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { TypeProduct } from '../../../services/models/product';
import { wishProducts as wishProductsData } from '../../../utils/data/wishProducts';

import WishProduct from '../../../components/wishProductsComponents/anotherProfile&Home';
import UserImage from '../../../assets/anotherProfile/wassimChouak.png';
import { style } from './styles';

const AnotherProfile: React.FC = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [feed, setFeed] = useState<Array<TypeProduct>>([]);

    useEffect(() => {
        setLoading(true);
        try {
            setFeed(wishProductsData);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) return <Text>Carregando...</Text>;

    return (
        <View style={{ flex: 1 }}>
            <View style={style.headerBackground}>
                <View style={style.topContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={UserImage} style={style.userImage} />
                    </View>
                    <View style={style.centerContainer}>
                        <TouchableOpacity
                            style={style.followersWrapper}
                            onPress={() =>
                                navigation.navigate('Followers', {
                                    index: 0,
                                })
                            }
                        >
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
                        <TouchableOpacity
                            style={style.followersWrapper}
                            onPress={() =>
                                navigation.navigate('Followers', {
                                    index: 1,
                                })
                            }
                        >
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
                </View>
                <View style={{ marginTop: 5 }}>
                    <Text style={style.userName}>Wassim Chouak</Text>
                    <Text style={style.userTag}>@WassimChouak</Text>
                </View>
                <Text style={style.descriptionText}>
                    Quer me enviar um presente e não sabe o que? Essa é uma
                    lista de alguns que eu gostaria de receber.
                </Text>
                <View style={style.followButtonContainer}>
                    <TouchableOpacity style={style.followButton}>
                        <Text style={style.followButtonText}>Seguir</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* ProductsHeader */}
            {/* Wishlist */}
            <FlatList
                data={feed}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={style.wishListContainer}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={style.wishListHeaderTitle}>
                            Lista de desejo de Wassim:
                        </Text>
                    </View>
                )}
                ListHeaderComponentStyle={style.wishListHeaderContainer}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                renderItem={(product) => <WishProduct product={product.item} />}
            />
        </View>
    );
};

export default AnotherProfile;
