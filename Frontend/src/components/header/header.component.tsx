import React from 'react';
import MenuContainer from './menu/menu.container';
import { HeaderCustom } from './header.styles';

const Header = () => (
    <HeaderCustom>
        <MenuContainer />
    </HeaderCustom>
);

export default Header;
