import React, { Fragment } from 'react';

import Routes from './src/routes.js';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
    return (
        <MenuProvider>
            <Routes />
        </MenuProvider>
    );
}
