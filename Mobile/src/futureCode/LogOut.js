import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';

const LogoutOnSettings = () => {
    const { Logout } = useContext(AuthContext);

    function handleLogout() {
        Logout();
    }
};

export default LogoutOnSettings;
