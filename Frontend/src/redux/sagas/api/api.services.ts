import { decode } from 'jsonwebtoken';
import axios from 'axios';
import { DecodeAccessToken, Token } from 'common/types/login';

const refreshTokenApi = (refreshToken: string) =>
    axios.put<Token>('/refresh-token', { refreshToken });

const axiosWithAuthorization = async (config = {}) => {
    // eslint-disable-next-line prefer-const
    let { accessToken, refreshToken } = JSON.parse(
        localStorage.getItem('tokens') as string
    );
    const { exp } = decode(accessToken) as DecodeAccessToken;

    if (Date.now() >= exp * 1000) {
        try {
            const response = await refreshTokenApi(refreshToken);
            const newTokens = response.data;
            accessToken = newTokens.accessToken;
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
