import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import { decode } from 'jsonwebtoken';
import { LoginAction } from 'redux/actions/userInfo/userInfo.interfaces';
import { login } from 'redux/actions/userInfo/userInfo.actions';
import { DecodeAccessToken } from 'common/types/login';

const App = () => {
    const dispatch = useDispatch<Dispatch<LoginAction>>();

    useEffect(() => {
        const tokens = localStorage.getItem('tokens');

        if (tokens) {
            const { fullname } = decode(
                JSON.parse(tokens).accessToken
            ) as DecodeAccessToken;

            dispatch(login({ fullname }));
        }
    });

    return (
        <Layout>
            <Header />
            <Main />
            <Footer />
        </Layout>
    );
};

export default App;
