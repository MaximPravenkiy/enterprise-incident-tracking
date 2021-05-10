import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItemCustom } from './MenuItemLogout.styles';
import { MenuItemLogoutProps } from './MenuItemLogout.interfaces';

const MenuItemLogout: FC<MenuItemLogoutProps> = memo(
    ({ key, url, text, ...props }) => (
        <MenuItemCustom {...props} key={key}>
            <NavLink to={`${url}`}>{text}</NavLink>
        </MenuItemCustom>
    )
);

export default MenuItemLogout;
