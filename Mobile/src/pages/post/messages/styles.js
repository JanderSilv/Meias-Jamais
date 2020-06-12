import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    postContainer: {
        paddingTop: 20,
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
        color: 'gray',
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

    postTime: {
        marginTop: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    postTimeText: {
        marginLeft: 10,
        fontFamily: 'Roboto-Light',
        color: '#A5A5A5',
    },

    likeContainer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderWidth: 0.5,
        borderColor: '#D4D4D4',
    },

    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    likeText: {
        marginLeft: 10,
        fontFamily: 'Roboto-Light',
    },

    messageContainer: {
        marginTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
    },

    messageDataContainer: {
        minHeight: 70,
        marginLeft: 10,
        justifyContent: 'space-around',
    },

    messageUser: {
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: 'black',
    },

    messageText: {
        fontFamily: 'Roboto-Light',
        color: '#5F5F5F',
    },

    messageTime: {
        fontFamily: 'Roboto-Light',
        color: '#989898',
        fontSize: 11,
    },

    messageInputWrapper: {
        paddingBottom: 10,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    messageInputContainer: {
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        alignItems: 'center',
    },

    messageInputText: {
        width: '80%',
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6B6B',
        fontSize: 18,
        color: '#212121',
    },
});
