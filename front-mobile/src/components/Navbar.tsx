import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doLogout, isAuthenticated } from '../services/auth';
import { nav, text, theme } from '../styles';

import goback from '../assets/goback.png';

const Navbar: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        logged();
    }, [authenticated])

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
        setAuthenticated(false);
    }

    return (
        <>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
            {
                navigation.canGoBack() && (
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{marginRight: 15}}
                    >
                        <Image source={goback} />
                    </TouchableOpacity>
                )
            }
            <Text 
                style={{
                    marginRight: 185,
                    fontWeight: 'bold',
                    fontSize: 18,
                    lineHeight: 25,
                    color: '#000'
                }}
            >
                MovieFlix
            </Text>
            {
                authenticated && navigation.canGoBack() ? (
                    <TouchableOpacity
                        style={nav.logoutBtn}
                        onPress={() => logout()}
                    >
                        <Text style={nav.logoutBtnText}>sair</Text>
                    </TouchableOpacity>
                ) : null
            }
            </View>

        </>
    )
};

export default Navbar;