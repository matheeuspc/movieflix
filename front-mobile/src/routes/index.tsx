import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Catalog, Home, Login, MovieDetails } from '../pages';
import { Navbar } from '../components'
import { Text } from 'react-native';
import { colors, nav } from '../styles';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>MovieFlix</Text>;

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: " ",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <Navbar />,
                // headerRight: () => <Navbar />
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