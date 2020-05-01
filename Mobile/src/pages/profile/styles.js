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
});
