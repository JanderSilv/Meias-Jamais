import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

export default function Notifications() {
    const backgroundColors = {
        white: 'white',
        red: '#FF6B6B',
    };

    const barStyleColors = {
        dark: 'dark-content',
        light: 'light-content',
    };

    const [backgroundColor, setBackgroundColor] = useState(
        backgroundColors.white
    );
    const [barStyleColor, setBarStyleColor] = useState(barStyleColors.dark);

    useEffect(() => {
        setBarStyleColor(backgroundColors.white);
        setBarStyleColor(barStyleColors.dark);
        return () => {
            console.log('pi');
            setBackgroundColor(backgroundColors.red);
            setBarStyleColor(barStyleColors.light);
        };
    }, []);

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
            <StatusBar
                backgroundColor={backgroundColor}
                barStyle={barStyleColor}
            />
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
