import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    productContainer: {
        width: '90%',
        height: 116,

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

    productText: {
        marginTop: 10,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Roboto-Light',
    },

    buttonsContainer: {
        marginTop: 20,
        paddingRight: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    messageContainer: {
        flexDirection: 'row',
    },

    messageCount: {
        marginLeft: 5,
        color: 'white',
    },

    giveGiftContainer: {
        flexDirection: 'row',
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
    //#endregion
});
