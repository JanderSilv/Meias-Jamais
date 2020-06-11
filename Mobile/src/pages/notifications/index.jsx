import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Notifications() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.1, backgroundColor: 'red' }}>
                <Text>
                    A campanha de 5% de volta em pagamentos com saldo PicPay vai
                    até dia 12/06. Toca aqui para saber mais.
                </Text>
                <Text>Ontem às 18:42</Text>
            </View>
        </View>
    );
}
