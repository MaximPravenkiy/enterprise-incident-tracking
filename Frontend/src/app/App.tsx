import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';
import { login } from 'redux/actions/login/login.actions';
import { LoginActionType } from 'redux/actions/login/login.interfaces';

const App = () => {
    const dispatch = useDispatch<Dispatch<LoginActionType>>();

    useEffect(() => {
        const data = localStorage.getItem('userData');

        if (data) {
            dispatch(login(JSON.parse(data)));
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
