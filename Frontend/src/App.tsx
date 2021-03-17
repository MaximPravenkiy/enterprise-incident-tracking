import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {useDispatch} from "react-redux";
import {login} from "./redux/store/actions/loginCreator";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const data = localStorage.getItem('userData');
        if (data) {
            dispatch(login(data));
            console.log(JSON.parse(data))
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
