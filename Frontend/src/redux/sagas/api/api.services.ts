import { decode } from 'jsonwebtoken';
import axios from 'axios';
import { DecodeAccessToken } from 'common/types/login';

const refreshTokenApi = (refreshToken: string) =>
    axios.put('/refresh-token', { refreshToken });

const axiosWithAuthorization = async (config = {}) => {
    const { exp } = <DecodeAccessToken>(
        decode(JSON.parse(<string>localStorage.getItem('tokens')).accessToken)
    );

    if (Date.now() >= exp * 1000) {
        try {
            const { refreshToken } = JSON.parse(
                <string>localStorage.getItem('tokens')
            );
            const response = await refreshTokenApi(refreshToken);
            const newTokens = response.data;
            localStorage.setItem('tokens', JSON.stringify(newTokens));
        } catch (e) {
            console.log(e.response.data.message);
        }
    }

    const { accessToken } = JSON.parse(<string>localStorage.getItem('tokens'));
    return axios.create({
        baseURL: '/',
        headers: { Authorization: `Bearer ${accessToken}` },
        ...config
    });
};

export default axiosWithAuthorization;
