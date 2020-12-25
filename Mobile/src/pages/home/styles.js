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
});
