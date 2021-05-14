import React, { FC, memo, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuCustom } from './menu.styles';
import { MenuProps } from './menu.interfaces';
import MenuItemsLoginContainer from './menu-items-login/menu-items-login.container';
import MenuItemsLogout from './menu.data';

const NavMenu: FC<MenuProps> = memo(({ isAuth, location }) => {
    const selectedKeys = useMemo(() => [location.pathname], [
        location.pathname
    ]);
    return (
        <MenuCustom theme="dark" mode="horizontal" selectedKeys={selectedKeys}>
            {isAuth ? <MenuItemsLoginContainer /> : MenuItemsLogout}
        </MenuCustom>
    );
});

export default withRouter(NavMenu);
