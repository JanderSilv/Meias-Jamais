import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export const style = StyleSheet.create({
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto-Regular',
    },

    logo: {
        width: '50%',
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    //#region inputStyles
    inputContainer: {
        width: '90%',
        height: 63.5,

        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,

        flexDirection: 'row',
        alignItems: 'center',
    },

    inputBackground: {
        width: 82.33,
        height: 63.91,
        paddingRight: 15,

        alignItems: 'center',
        justifyContent: 'center',
    },

    inputText: {
        flex: 1,

        fontSize: 22,
        color: 'white',
        marginLeft: 5,
    },
    //#endregion

    //#region logInStyles
    logInButton: {
        width: 200,
        height: 40,
        marginTop: 30,

        borderRadius: 50,

        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logInButtonText: {
        fontSize: 20,
        color: '#EB5F66',
    },
    //#endregion

    //#region signIn
    signInContainer: {
        marginTop: 90,

        flexDirection: 'row',
        justifyContent: 'center',
    },

    signInButtonText: {
        color: 'white',
        fontSize: 19,
    },

    signInDescription: {
        color: 'white',
        fontSize: 19,
        fontFamily: 'Roboto-Thin',
    },
    //#endregion

    forgotPassword: {
        color: 'white',
        fontFamily: 'Roboto-Light',
        fontSize: 18,
    },
});
