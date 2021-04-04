import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import Routes from 'routes';

const Content = styled(Layout.Content)`
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = () => (
    <Content>
        <Routes />
    </Content>
);

export default Main;
