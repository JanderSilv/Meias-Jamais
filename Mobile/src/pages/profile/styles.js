import React from 'react';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto-Regular',
    },

    //#region HeaderStyles
    headerBackground: {
        height: 241,
        paddingTop: 15,
        paddingHorizontal: 20,
        backgroundColor: '#FF7A7A',
    },

    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    //#region LeftSideStyles
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
        width: '92%',
        marginTop: 20,
        paddingVertical: 20,
        backgroundColor: '#F1F1F1',
        borderRadius: 9,
        elevation: 4,
        alignItems: 'center',
        alignSelf: 'center',
    },

    productContainer: {
        width: '90%',
        height: 116,

        paddingVertical: 10,
        paddingLeft: 20,
        borderRadius: 8,
        backgroundColor: '#FF6B6B',

        flexDirection: 'row',
    },

    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
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

    productText: {
        marginTop: 10,
        color: 'white',
        fontSize: 16,
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    productImage: {
        width: '100%',
        height: 103,
        resizeMode: 'contain',
    },

    optionsButton: {
        width: 20,
        height: 20,
        borderRadius: 50,
        position: 'absolute',
        right: 10,
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
    //#endregion
});
