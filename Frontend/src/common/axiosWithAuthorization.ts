import axios from 'axios';

const refreshTokenApi = (refreshToken: string) =>
    axios.put('/refreshTokens', { refreshToken });

const axiosWithAuthorization = async (config = {}) => {
    const { expiresIn } = JSON.parse(<string>localStorage.getItem('tokens'));

    if (Date.now() >= expiresIn) {
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
