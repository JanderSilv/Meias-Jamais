import React from 'react';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto-Regular',
    },

    headerBackground: {
        width: '100%',
        height: 228,
        paddingTop: 20,
        alignItems: 'center',
    },

    headerTitle: { color: 'white', fontSize: 28 },

    headerDescription: { marginTop: 10, color: 'white' },

    postContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    postDescriptionContainer: {
        marginTop: 10,
        paddingHorizontal: 50,
        flexDirection: 'row',
    },

    userImage: {
        width: 54,
        height: 54,
        borderRadius: 50,
    },

    postDescription: {
        marginLeft: 10,
        fontFamily: 'Roboto-Light',
        fontSize: 16,
    },

    productContainer: {
        width: '90%',
        height: 116,

        marginTop: 10,
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

    giveGiftContainer: {
        marginLeft: 15,
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
});
