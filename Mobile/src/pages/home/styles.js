import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export const style = StyleSheet.create({
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto-Regular',
    },

    headerBackground: {
        height: 216,
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
        marginVertical: 10,
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
});
