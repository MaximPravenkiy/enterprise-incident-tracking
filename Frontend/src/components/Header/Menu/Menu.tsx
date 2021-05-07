import React, { FC } from 'react';
import { MenuCustom } from 'components/Header/Menu/Menu.styles';
import { MenuProps } from 'components/Header/Menu/Menu.interfaces';
import { withRouter } from 'react-router-dom';

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
