import React, { FC, memo, useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { MenuCustom } from './Menu.styles';
import { MenuProps } from './Menu.interfaces';
import MenuItemsLoginContainer from './MenuItemsLogin/MenuItemsLogin.container';
import MenuItemsLogout from './Menu.data';

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
