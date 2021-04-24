import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Catalog, Home, Login, MovieDetails } from '../pages';
import { LogoutButton, Navbar } from '../components'
import { Text, View } from 'react-native';
import { colors, nav } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/core';
import { doLogout, isAuthenticated } from '../services/auth';

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