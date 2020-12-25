import { StyleSheet, Platform } from 'react-native';

export const style = StyleSheet.create({
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
