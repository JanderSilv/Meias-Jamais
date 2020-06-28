import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RequiredMessage(props) {
    const { primary, style, message } = props;
    let color;
    if (primary) {
        color = '#F5F5F5';
    } else {
        color = 'gray';
    }
    const styles = setStyles(color);

    return (
        <View style={style}>
            <Text style={styles.errorMessageText}>
                {message ? '⚠ ' + message : '⚠ Este campo é obrigatório'}
            </Text>
        </View>
    );
}

const setStyles = (color = '') =>
    StyleSheet.create({
        errorMessageText: {
            color: color,
            fontSize: 16,
            fontStyle: 'italic',
            fontFamily: 'Roboto-Light',
        },
    });
