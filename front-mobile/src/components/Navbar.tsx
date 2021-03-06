import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { doLogout, isAuthenticated } from '../services/auth';

import goback from '../assets/goback.png';

const Navbar: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [show, setShow] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        logged();
    }, [authenticated])

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    return (
        <>
            <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-around', padding: 15 }}>
                <View>
                    {
                        (route.name == 'Login' || route.name == 'MovieDetails') && (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{ marginRight: 10 }}
                            >
                                <Image source={goback} />
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View>
                    <Text
                        style={{
                            marginLeft: 20,
                            marginRight: 100,
                            fontWeight: 'bold',
                            fontSize: 18,
                            lineHeight: 25,
                            color: '#000',
                        }}
                    >
                        MovieFlix
                     </Text>
                </View>
                
            </View>


        </>
    )
};

export default Navbar;