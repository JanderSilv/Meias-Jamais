import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native';

type Styles = {
    postContainer: ViewStyle;
    postDescriptionContainer: ViewStyle;
    userImage: ImageStyle;
    postDescription: TextStyle;
};

export const style = StyleSheet.create<Styles>({
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
