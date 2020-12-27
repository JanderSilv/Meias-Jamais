import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function ConfigNotificationsButtons() {
    return (
        <TouchableOpacity style={{ marginRight: 20 }}>
            <Text style={{ color: '#FF6B6B' }}>Configurar</Text>
        </TouchableOpacity>
    );
}
