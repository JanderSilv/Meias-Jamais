import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RequiredMessage(props) {
    const { style } = props;

    return (
        <View style={style}>
            <Text style={styles.errorMessageText}>
                ⚠ Este campo é obrigatório
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    errorMessageText: {
        marginTop: 5,
        color: '#F5F5F5',
        fontSize: 16,
        fontStyle: 'italic',
        fontFamily: 'Roboto-Light',
    },
});
