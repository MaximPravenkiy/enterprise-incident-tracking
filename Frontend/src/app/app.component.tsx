import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Header from 'components/header/header.component';
import Footer from 'components/footer/footer.component';
import { decode } from 'jsonwebtoken';
import { LoginAction } from 'redux/actions/user-info/user-info.interfaces';
import { login } from 'redux/actions/user-info/user-info.actions';
import { DecodeAccessToken } from 'common/types/login';
import { Content } from './app.styles';
import Routes from './routes';

const App = () => {
    const dispatch = useDispatch<Dispatch<LoginAction>>();

    useEffect(() => {
        const tokens = localStorage.getItem('tokens');

        if (tokens) {
            const { fullname } = decode(
                JSON.parse(tokens).accessToken
            ) as DecodeAccessToken;

            dispatch(login(fullname));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            <Header />
            <Content>
                <Routes />
            </Content>
            <Footer />
        </Layout>
    );
};

export default App;
