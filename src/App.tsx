import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import {SettingOutlined, ToolOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import {LoginForm} from "./components/Forms/LoginForm";
import {RegistrationForm} from "./components/Forms/RegistrationForm";

const CustomMenu = styled(Menu)`
    display: flex;
    justify-content: center;
    height: 100%;
`

const MenuItem = styled(Menu.Item)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 30%;
        font-size: 2em;
        text-transform: uppercase;
    }
`

const Header = styled(Layout.Header)`
    height: 15vh;
`

const Content = styled(Layout.Content)`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Footer = styled(Layout.Footer)`
    height: 15vh;
    text-align: center;
    padding: 5px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A9A9A9;
`

const StyleSpan = styled.span`
    font-size: 30px;
    text-transform: uppercase;
    margin: 0 10px;
`

function App() {
    return (
        <Layout>
            <Header>
                <CustomMenu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <MenuItem key="1">Вход</MenuItem>
                    <MenuItem key="2">Регистрация</MenuItem>
                </CustomMenu>
            </Header>

            <Content>
                {/*<LoginForm/>*/}
                <RegistrationForm/>
            </Content>

            <Footer>
                <ToolOutlined/>
                <StyleSpan>iscander</StyleSpan>
                <SettingOutlined />
            </Footer>
        </Layout>
    );
}

export default App;
