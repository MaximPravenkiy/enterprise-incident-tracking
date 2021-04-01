import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import MenuContainer from '../../containers/MenuContainer';

const HeaderCustom = styled(Layout.Header)`
    height: 15vh;
`;

const Header = () => (
    <HeaderCustom>
        <MenuContainer />
    </HeaderCustom>
);

export default Header;
