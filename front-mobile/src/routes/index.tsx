import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Catalog, Home, Login, MovieDetails } from '../pages';
import { Navbar } from '../components'
import { Text, View } from 'react-native';
import { colors, nav } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/core';
import { doLogout, isAuthenticated } from '../services/auth';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>MovieFlix</Text>;
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

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: " ",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <Navbar />,
                headerRight: () => <LogoutButton />
            }}
        >
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Catalog" component={Catalog} /> 
            <Stack.Screen name="MovieDetails" component={MovieDetails} /> 
        </Stack.Navigator>
    );
};

export default Routes;