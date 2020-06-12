import React from 'react';
import { View, Text } from 'react-native';

export default function Notifications() {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
            <View style={{ flex: 0.13, justifyContent: 'space-around' }}>
                <Text
                    style={{ fontFamily: 'Roboto-Regular', color: '#606060' }}
                >
                    A campanha de 5% de volta em pagamentos com saldo PicPay vai
                    até dia 12/06. Toca aqui para saber mais.
                </Text>
                <Text style={{ fontFamily: 'Roboto-Light', fontSize: 12 }}>
                    Ontem às 18:42
                </Text>
                <View
                    style={{
                        width: '100%',
                        marginTop: 15,
                        borderWidth: 0.5,
                        borderColor: '#D4D4D4',
                    }}
                />
            </View>
        </View>
    );
}
