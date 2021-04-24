import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import { theme, text } from '../styles';

import mainImage from '../assets/mainImage.png';
import arrow from '../assets/arrow.png';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={theme.homeContainer}>
            <Image source={mainImage} style={theme.mainImage} />
            <View style={theme.textContainer}>
                    <Text style={text.bold}>Avalie filmes</Text>
                    <Text style={text.regular}>Diga o que você achou do seu filme favorito</Text>
                </View>
                <TouchableOpacity 
                    style={theme.primaryButton} 
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={text.primaryText}>FAZER LOGIN</Text>
                    <View style={theme.arrowContainer}>
                        <Image source={arrow} />
                    </View>
                </TouchableOpacity>
        </View>
    );
};

export default Home;