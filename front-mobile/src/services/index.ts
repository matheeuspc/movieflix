import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const api = axios.create ({
    baseURL: "https://matheuspc-movieflix.herokuapp.com"
});

export const TOKEN = 'Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==';

export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    return token;
}

//Backend requests

export async function getMovies(genreId?: string) {
    const authToken = await userToken();
    const res = api.get(`/movies?direction=ASC&orderBy=title&genreId=${genreId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return res;
}

export async function getMovie(movieId: number) {
    const authToken = await userToken();
    const res = await api.get(`/movies/${movieId}`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return res;
}

export async function getGenres() {
    const authToken = await userToken();
    const res = api.get(`/genres`, {
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    });
    return res;
}

export async function createReview(data: object){
    const authToken = await userToken();
    const res = api.post('/reviews', data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        }
    });
    return res;
};

