import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme } from '../styles';

interface MovieProps {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
}

const MovieCard: React.FC<MovieProps> = ({ id, imgUrl, title, year, subTitle}) => {
    const navigation = useNavigation();

    return (
        <View style={theme.movieCard}> 
            <Image source={{ uri: imgUrl}} style={theme.movieDetailImage} />
            <View style={theme.movieInfos}>
                <Text style={text.movieTitle}>{title}</Text>
                <Text style={text.movieYear}>{year}</Text>
                <Text style={text.movieSubTitle}>{subTitle}</Text>
            </View>
            <TouchableOpacity 
                style={theme.movieDetailsBtn}
                onPress={() => navigation.navigate("MovieDetails", { id })}
            >
                <Text style={text.movieDetailBtnText}>Ver Detalhes</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MovieCard;