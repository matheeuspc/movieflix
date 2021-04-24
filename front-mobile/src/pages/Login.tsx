import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import { colors, theme, text, nav } from '../styles';

import arrow from '../assets/arrow.png';
import eyesOpened from '../assets/eyes-opened.png';
import eyesClosed from '../assets/eyes-closed.png';
import { useNavigation } from '@react-navigation/native';

import { login } from '../services/auth';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [userFetchData, setUserFetchData] = useState({});
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });

    async function handleLogin() {
        const data = await login(userInfo);
        setUserFetchData(data);
        navigation.navigate("Catalog");
    };

    return (
        <View style={theme.container}>
                <Text style={text.loginTitle}>Login</Text>
                <View style={theme.form}>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={theme.textInput} 
                        value={userInfo.username}
                        onChangeText={(e) => {
                            const newUserInfo = { ...userInfo };
                            newUserInfo.username = e;
                            setUserInfo(newUserInfo);
                        }}
                    />
                    <View style={theme.passwordGroup}>
                        <TextInput
                            placeholder="Senha"
                            autoCapitalize="none"
                            style={theme.textInput}
                            secureTextEntry={hidePassword}
                            value={userInfo.password}
                            onChangeText={(e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.password = e;
                                setUserInfo(newUserInfo);
                            }}
                        />
                        <TouchableOpacity
                            style={theme.toggle}
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Image source={hidePassword ? eyesOpened : eyesClosed} style={theme.eyes} />
                        </TouchableOpacity>
                    </View>                    
                </View>
                <TouchableOpacity
                    style={theme.primaryButton}
                    activeOpacity={0.8}
                    onPress={() => handleLogin()}
                >
                    <View style={theme.buttonTextContainer}>
                        <Text style={text.primaryText}>Fazer login</Text>
                    </View>
                    <View style={theme.arrowContainer}>
                        <Image source={arrow} />
                    </View>
                </TouchableOpacity>
        </View>
    );
};

export default Login;