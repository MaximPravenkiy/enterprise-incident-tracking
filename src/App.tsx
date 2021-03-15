import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Layout>
            <Header/>
            <Main/>
            <Footer/>
        </Layout>
    );
}

export default App;
