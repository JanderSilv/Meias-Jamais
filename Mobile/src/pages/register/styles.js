import { StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants';

export const style = StyleSheet.create({
    fontFamily: {
        fontFamily: Platform.OS === 'ios' ? 'San Francisco' : 'Roboto-Regular',
    },

    logo: {
        width: '30%',
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    pageBackground: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },

    formWrapper: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputsWrapper: {
        width: '90%',
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginBottom: 40,
        backgroundColor: '#F5F5F5',
        borderRadius: 26,
    },

    imagePickerContainer: {
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarFrame: {
        height: 100,
        resizeMode: 'contain',
        zIndex: 10,
    },

    avatarImage: {
        width: 89,
        height: 89,
        borderRadius: 50,
        position: 'absolute',
        top: 3,
    },

    inputsContainerPartOne: {
        minHeight: 230,
        justifyContent: 'space-around',
    },

    inputsContainerPartTwo: {
        minHeight: 100,
        justifyContent: 'space-around',
    },

    inputText: {
        fontFamily: 'Roboto-Regular',
        marginLeft: 10,
        fontSize: 16,
        flex: 0.8,
    },

    inputDate: {
        marginLeft: 10,
        fontSize: 16,
        // backgroundColor: 'blue',
        width: '70%',
    },

    goForwardButton: {
        width: '50%',
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },

    goForwardButtonText: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        color: '#EE6C61',
    },

    goBackButton: {
        fontFamily: 'Roboto-Medium',
        width: '40%',
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
    },

    buttonsContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    createAccountButtonText: {
        fontFamily: 'Roboto-Medium',
        color: '#EE6C61',
    },

    footer: {
        paddingBottom: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    footerText: {
        color: 'white',
        opacity: 0.7,
        fontSize: 12,
    },
});
