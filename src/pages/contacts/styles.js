import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export const style = StyleSheet.create({
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto-Regular',
    },

    //#region HeaderStyles
    headerBackground: {
        height: 142,
        paddingTop: 20,
        alignItems: 'center',
    },

    headerTitle: { color: 'white', fontSize: 28 },

    headerDescription: {
        marginTop: 10,
        color: 'white',
        fontFamily: 'Roboto-Light',
    },
    //#endregion

    contactsContainer: { paddingTop: 20 },

    //#region searchStyles
    searchContainer: {
        width: '90%',
        height: 55,

        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#DBDBDB',
        borderRadius: 50,
        elevation: 6,

        flexDirection: 'row',
    },

    searchIconBackground: {
        width: 55,

        borderRadius: 50,
        backgroundColor: '#FF7A7A',

        alignItems: 'center',
        justifyContent: 'center',
    },

    searchInputText: {
        flex: 1,
        paddingLeft: 5,
        fontSize: 16,
    },
    //#endregion

    //#region userStyles
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    userImage: {
        width: 58,
        height: 58,
        resizeMode: 'contain',
    },

    userText: {
        fontSize: 16,
        fontFamily: 'Roboto-Light',
    },
    //#endregion
});
