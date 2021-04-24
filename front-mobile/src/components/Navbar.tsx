import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { doLogout, isAuthenticated } from '../services/auth';

const Navbar: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        logged();
    }, [])

    function navigate(path: string) {
        if (path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function logout() {
        doLogout();
        navigation.navigate('Login');
    }

    return (
        <>
            {
                authenticated ? (
                    <View>
                        <Text>LOGOUT</Text>
                    </View>
                ) : null 
            }

        </>
    )
};

export default Navbar;