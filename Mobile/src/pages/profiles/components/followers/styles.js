import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: { flex: 1 },

    searchContainer: {
        width: '90%',
        marginTop: 20,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF6B6B',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    searchText: {
        width: '80%',
        marginLeft: 15,
        color: '#212121',
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    userImage: {
        width: 54,
        height: 54,
        borderRadius: 50,
    },

    followerButton: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 7,
    },
});
