import axios, {AxiosRequestConfig} from 'axios';
import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET } from './auth';

type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'https://matheuspc-movieflix.herokuapp.com';

export const makeRequest = (params: AxiosRequestConfig) => {
    return axios({
        ...params,
        baseURL: BASE_URL
    });
}

export const makeLogin = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`

    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
    }

    const payload = qs.stringify({...loginData, grant_type: 'password'});

    return makeRequest({url: '/oauth/token', data: payload, method: 'POST', headers});

}