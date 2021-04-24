import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import { colors, theme, text, nav } from '../styles';

import downArrow from '../assets/downArrow.png';
import { useNavigation } from '@react-navigation/native';

import { login } from '../services/auth';
import { ScrollView } from 'react-native-gesture-handler';

import { api, getGenres, getMovies } from '../services';
import { MovieCard } from '../components';

const Catalog: React.FC = () => {
    const [search, setSearch] = useState("");
    // const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedGenre, setSelectedGenre] = useState({
        id: '',
        name: ''
    });
    const [genres, setGenres] = useState([]);
    const [showGenres, setShowGenres] = useState(false);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({
        title: "",
        subtitle: "",
        year: "",
        imgUrl: " ",
        synopsis: "",
        genres: [],
    });

    async function fillMovies() {
        setLoading(true);
        const res = await getMovies(selectedGenre.id);
        setMovies(res.data.content);
        setLoading(false);
    }

    async function loadGenres() {
        setLoading(true);
        const res = await getGenres();
        setGenres(res.data);
        setLoading(false);
    };

    useEffect(() => {
        fillMovies();
    }, [selectedGenre]);

    useEffect(() => {
        loadGenres();
    }, []);

    return (
        <ScrollView style={theme.catalogContainer}>
            <Modal
                visible={showGenres}
                animationType="fade"
                transparent={true}
                presentationStyle="overFullScreen"
            >
                <View style={theme.modalContainer}>
                    <ScrollView contentContainerStyle={theme.modalContent}>
                        {
                            genres.map(
                                genre => (
                                    <TouchableOpacity
                                        style={theme.modalItem}
                                        key={genre.id}
                                        onPress={() => {
                                            setMovie({ ...movie, genres: genre.name });
                                            setSelectedGenre(genre)
                                            setShowGenres(!showGenres);
                                        }}
                                    >
                                        <Text>{genre.name}</Text>
                                    </TouchableOpacity>
                                )
                            )
                        }
                    </ScrollView>
                </View>
            </Modal>
            <View style={theme.genreContainer}>
                <TouchableOpacity
                    style={theme.selectInput}
                    activeOpacity={0.8}
                    onPress={() => setShowGenres(!showGenres)}            
                >
                    <Text style={text.genreText}>
                        {
                            selectedGenre.name == '' ? 'Escolha um gênero' : selectedGenre.name
                        }
                    </Text>
                    <View style={theme.downContainer}>
                        <Image source={downArrow} />
                    </View>
                </TouchableOpacity>
            </View>
            {
                loading ? (<ActivityIndicator size="large" />) :
                    (
                        movies.map(movie => (
                            <MovieCard {...movie} key={movie.id} />
                        )))
            }
        </ScrollView>

    );
};

export default Catalog;