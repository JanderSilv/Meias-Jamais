import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';

// import { Container } from './styles';

const WebViewComponent = (route) => {
    const CheckConnection = () => {
        return NetInfo.fetch().then((state) => {
            if (state.isConnected) return true;
            else return false;
        });
    };
    console.log(CheckConnection());
    return (
        <View style={{ flex: 1 }}>
            {CheckConnection() ? (
                <WebView source={{ uri: route.route.params.url }} />
            ) : (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text>Conecte-se a internet para acessar está página</Text>
                </View>
            )}
        </View>
    );
};

export default WebViewComponent;
