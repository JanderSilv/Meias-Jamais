import { StyleSheet, TouchableOpacity, Platform } from 'react-native';

export const style = StyleSheet.create({
    blur: {
        flex: 1,
    },

    closeArea: {
        flex: 1,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalBackground: {
        width: '90%',
        paddingVertical: 20,

        backgroundColor: 'white',
        borderRadius: 15,
    },

    modalTitle: {
        fontSize: 20,
        fontFamily: 'Roboto-Light',
        alignSelf: 'center',
        textAlign: 'center',
    },

    productImageInput: {
        width: '80%',
        height: 140,
        marginTop: 20,
        borderWidth: 3,
        borderStyle: 'dashed',
        borderRadius: 16,
        borderColor: '#EA565C',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    inputsContainer: {
        minHeight: 140,
        marginTop: 30,
        marginBottom: 40,
        marginHorizontal: 20,

        justifyContent: 'space-between',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    Picker: {
        width: '90%',
        height: 50,
        marginLeft: 2,
    },

    inputText: {
        marginLeft: 10,
        fontSize: 16,
    },

    addProductButton: {
        width: '70%',
        height: 40,
        borderRadius: 30,
        backgroundColor: '#FF7A7A',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    //#endregion
});
