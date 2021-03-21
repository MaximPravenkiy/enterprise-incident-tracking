import React from 'react';
import {RegistrationForm} from "../Forms/RegistrationForm";
import {LoginForm} from "../Forms/LoginForm";
import styled from "styled-components";
import {Layout} from "antd";
import {Redirect, Route, Switch } from 'react-router-dom';
import {useSelector} from "react-redux";
import Incidents from "./Incidents/Incidents";

const Content = styled(Layout.Content)`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Main = () => {
    const isAuth: any = useSelector(({loginReducer}: any) => loginReducer.isAuth);
    const routes = isAuth ? (
            <Switch>
                <Route exact path='/incidents' component={Incidents}/>
                <Redirect to="/incidents"/>
            </Switch>
        ) :
        (
            <Switch>
                <Route exact path='/login' component={LoginForm}/>
                <Route exact path='/registration' component={RegistrationForm}/>
                <Redirect to="/login"/>
            </Switch>
        );

    return (
        <Content>
            {routes}
        </Content>
    );
}

export default Main;