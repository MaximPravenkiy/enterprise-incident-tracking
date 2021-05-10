import React, { FC } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuCustom } from './Menu.styles';
import { MenuProps } from './Menu.interfaces';
import MenuItemsLoginContainer from './MenuItemsLogin/MenuItemsLogin.container';
import MenuItemsLogout from './Menu.data';

const NavMenu: FC<MenuProps> = ({ isAuth, location }) => (
    <MenuCustom
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname]}
    >
        {isAuth ? <MenuItemsLoginContainer /> : MenuItemsLogout}
    </MenuCustom>
);

export default withRouter(NavMenu);
