import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Catalog, Home, Login, MovieDetails } from '../pages';
import { LogoutButton, Navbar } from '../components'
import { colors } from '../styles';

const Stack = createStackNavigator();



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