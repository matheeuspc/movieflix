import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api, getMovie, createReview } from '../services';
import { useNavigation } from '@react-navigation/native';
import leftArrow from '../assets/leftArrow.png';
import { text, theme } from '../styles';
import { TextInput } from 'react-native-gesture-handler';
import Toast from 'react-native-tiny-toast';
import { ReviewCard } from '../components';
import { isAllowedByRole, isAuthenticatedAndAllowedByRole } from '../services/auth';

interface FormReviewProps {
    setScreen: Function;
}

const MovieDetails: React.FC = ({
    route: {
        params: { id }
    }
}) => {
    // const { setScreen } = props;

    const [testee, setteste] = useState(true);

    const [movie, setMovie] = useState({
        id: null,
        title: null,
        year: null,
        imgUrl: null,
        subTitle: null,
        synopsis: null,
        reviews: []
    });

    const [newReview, setNewReview] = useState({
        text: "",
        movieId: ""
    });

    function handleSave() {
        PostReview();
    }

    async function PostReview() {
        setLoading(true);
        const data = newReview;
        console.log(data);
        try {
            await createReview(data);
            Toast.showSuccess("Review postada com sucesso!");
        } catch (res) {
            Toast.show("Erro ao salvar review...");
        }
        setLoading(false);
    }

    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    async function loadMovieData() {
        setLoading(true);
        const res = await getMovie(id);
        setMovie(res.data);
        setLoading(false);
    }

    function teste() {
        console.log(AsyncStorage.getAllKeys().then((res) => console.log(`resposta ${res}`)))
    }

    useEffect(() => {
        loadMovieData();
    }, []);

    return (
        <ScrollView style={theme.detailsContainer}>
            <View style={theme.movieCardDetails}>
                <Text style={theme.movieDetailsTitle}>{movie.title}</Text>
                <Image source={{ uri: movie.imgUrl }} style={theme.movieDetailsImage} />
                <View style={theme.movieDetailsInfos}>
                    <Text style={text.movieDetailsYear}>{movie.year}</Text>
                    <Text style={text.movieDetailsSubTitle}>{movie.subTitle}</Text>
                    <Text style={text.movieDetailsSynopsisTitle}>Sinopse</Text>
                    <View style={theme.movieDetailsSynopsis}>
                        <Text style={text.movieDetailsSynopsisText}>{movie.synopsis}</Text>
                    </View>
                </View>
            </View>
            <View style={theme.movieCardReview}>
                <TextInput
                    multiline placeholder="Deixe sua avaliação aqui"
                    style={theme.textAreaReview}
                    value={newReview.text}
                    onChangeText={(e) => setNewReview({ movieId: id, text: e })}
                />
                <TouchableOpacity
                    style={theme.buttonNewReview}
                    onPress={() => handleSave()}
                >
                    <View >
                        <Text style={text.primaryText}>salvar avaliação</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={theme.movieCardListReviews}>
                <Text style={text.reviewsListText}>Avaliações</Text>
                {
                    movie.reviews.length == 0 && (
                        <Text style={{ color: "#FFF", marginBottom: 15 }}>Ainda não existem reviews para esse filme.</Text>
                    )
                }
                {
                    movie.reviews.map(review => (
                        <ReviewCard review={review} key={review.id} />
                    ))
                }
            </View>
        </ScrollView>
    );
};

export default MovieDetails;