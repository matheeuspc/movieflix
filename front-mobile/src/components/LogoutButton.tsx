import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doLogout, isAuthenticated } from '../services/auth';
import { nav } from '../styles';

const LogoutButton: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
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
        <View>
                    {
                        isAuthenticated() && route.name != 'Login' && route.name != 'Home' ? (
                            <TouchableOpacity
                                style={nav.logoutBtn}
                                activeOpacity={0.8}
                                onPress={() => logout()}
                            >
                                <Text style={nav.logoutBtnText}>sair</Text>
                            </TouchableOpacity>
                        ) : null
                    }
                </View>
    )
}

export default LogoutButton;