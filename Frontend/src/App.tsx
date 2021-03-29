import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {useDispatch} from "react-redux";
import {login} from "./redux/store/actions/loginCreator";
import {Dispatch} from "redux";
import {LoginActionType} from "./redux/store/actions/Types/loginTypes";

function App() {
    const dispatch = useDispatch<Dispatch<LoginActionType>>();

    useEffect(() => {
        const data = localStorage.getItem('userData');

        if (data) {
            dispatch(login(JSON.parse(data)));
        }
    });

    return (
        <Layout>
            <Header/>
            <Main/>
            <Footer/>
        </Layout>
    );
}

export default App;
