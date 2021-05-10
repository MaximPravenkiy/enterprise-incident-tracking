import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuCustom } from './Menu.styles';
import { MenuProps } from './Menu.interfaces';

const NavMenu: FC<MenuProps> = ({ menuItems, location }) => (
    <MenuCustom
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
    >
        {menuItems}
    </MenuCustom>
);

export default withRouter(NavMenu);
