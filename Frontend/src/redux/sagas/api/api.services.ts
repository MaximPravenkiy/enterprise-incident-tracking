import { decode } from 'jsonwebtoken';
import axios from 'axios';
import { DecodeAccessToken } from 'common/types/login';

const refreshTokenApi = (refreshToken: string) =>
    axios.put('/refresh-token', { refreshToken });

const axiosWithAuthorization = async (config = {}) => {
    const { accessToken, refreshToken } = JSON.parse(
        localStorage.getItem('tokens') as string
    );
    const { exp } = decode(accessToken) as DecodeAccessToken;

    if (Date.now() >= exp * 1000) {
        try {
            const response = await refreshTokenApi(refreshToken);
            const newTokens = response.data;
            localStorage.setItem('tokens', JSON.stringify(newTokens));
        } catch (e) {
            console.log(e.response.data.message);
        }
    }

    return axios.create({
        baseURL: '/',
        headers: { Authorization: `Bearer ${accessToken}` },
        ...config
    });
};

export default axiosWithAuthorization;
