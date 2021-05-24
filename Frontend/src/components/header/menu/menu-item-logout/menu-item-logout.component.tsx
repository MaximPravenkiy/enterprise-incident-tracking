import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItemCustom } from './menu-item-logout.styles';
import { MenuItemLogoutProps } from './menu-item-logout.interfaces';

const MenuItemLogout: FC<MenuItemLogoutProps> = memo(
    ({ key, url, text, ...props }) => (
        <MenuItemCustom {...props} key={key}>
            <NavLink to={`${url}`}>{text}</NavLink>
        </MenuItemCustom>
    )
);

export default MenuItemLogout;
