import React from 'react';
import {RegistrationForm} from "../Forms/RegistrationForm";
import {LoginForm} from "../Forms/LoginForm";
import styled from "styled-components";
import {Layout} from "antd";
import {Redirect, Route, Switch } from 'react-router-dom';

const Content = styled(Layout.Content)`
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Main = () => {
    return (
        <Content>
            <Switch>
                <Route exact path='/login' component={LoginForm}/>
                <Route exact path='/registration' component={RegistrationForm}/>
                <Redirect to="/login"/>
            </Switch>
        </Content>
    );
}

export default Main;