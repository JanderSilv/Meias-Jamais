import { StyleSheet, TouchableOpacity, Platform } from 'react-native';

export const style = StyleSheet.create({
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto-Regular',
    },

    //#region HeaderStyles
    headerBackground: {
        paddingTop: 15,
        paddingBottom: 30,
        paddingHorizontal: 20,
        backgroundColor: '#FF7A7A',
        elevation: 4,
    },

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    //#region LeftSideStyles
    userImage: {
        width: 65,
        height: 65,
        borderRadius: 100,
        resizeMode: 'contain',
    },

    userName: {
        color: 'white',
        fontFamily: 'Roboto-Light',
        fontSize: 20,
    },

    userTag: {
        marginTop: 2,
        color: 'white',
        fontFamily: 'Roboto-Light',
        fontSize: 18,
    },
    //#endregion

    //#region CenterStyles
    centerContainer: {
        paddingTop: 10,
        flex: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    followersWrapper: {
        alignItems: 'center',
        // justifyContent: 'center',
    },

    followersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    followersCounter: {
        marginRight: 10,
        color: 'white',
        fontSize: 18,
    },

    followersText: {
        color: 'white',
        fontSize: 18,
    },
    //#endregion

    descriptionText: {
        marginTop: 10,
        color: 'white',
    },
    //#endregion

    //#region WishListHeaderStyles
    wishListHeaderContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    wishListHeaderTitle: {
        color: '#595959',
        fontFamily: 'Roboto-Light',
        fontSize: 18,
    },

    addProductButton: {
        width: '40%',
        height: 30,
        paddingHorizontal: 10,
        backgroundColor: '#FF7A7A',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    addProductButtonText: {
        color: 'white',
        fontFamily: 'Roboto-Light',
    },
    //#endregion

    //#region WishListStyles
    wishListContainer: {
        width: '94%',
        paddingTop: 20,
        backgroundColor: '#F1F1F1',
        borderRadius: 9,
        elevation: 4,
        alignItems: 'center',
        alignSelf: 'center',
    },

    productContainer: {
        width: '95%',
        minHeight: 116,
        marginBottom: 20,

        paddingVertical: 10,
        paddingLeft: 20,
        borderRadius: 8,
        backgroundColor: '#FF6B6B',

        flexDirection: 'row',
        position: 'relative',
    },

    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    categoryIcon: {
        width: 18,
        height: 18,
        marginTop: 3,
    },

    categoryText: {
        marginLeft: 5,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto-Light',
    },

    productTitle: {
        marginTop: 10,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto-Light',
    },

    productDescription: {
        marginTop: 5,
        color: '#F5F5F5',
        fontFamily: 'Roboto-Light',
    },

    buttonsContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },

    messageContainer: {
        marginLeft: 20,
        flexDirection: 'row',
    },

    messageCount: {
        marginLeft: 5,
        color: 'white',
    },

    productImageContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    productImage: {
        width: '100%',
        height: 103,
        resizeMode: 'contain',
    },

    optionsButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    //#endregion
});

export const triggerStyles = {
    triggerWrapper: {
        paddingRight: 5,
    },
    TriggerTouchableComponent: TouchableOpacity,
};

export const optionsStyles = {
    optionsContainer: {
        width: '35%',
        paddingVertical: 5,
    },
};
