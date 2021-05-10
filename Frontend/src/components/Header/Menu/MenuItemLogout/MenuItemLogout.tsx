import React, { FC, memo } from 'react';
import { MenuItemCustom } from 'components/Header/Menu/MenuItemLogout/MenuItemLogout.styles';
import { MenuItemLogoutProps } from 'components/Header/Menu/MenuItemLogout/MenuItemLogout.interfaces';
import { NavLink } from 'react-router-dom';

const MenuItemLogout: FC<MenuItemLogoutProps> = memo(
    ({ key, url, text, ...props }) => (
        <MenuItemCustom {...props} key={key}>
            <NavLink to={`${url}`}>{text}</NavLink>
        </MenuItemCustom>
    )
);

export default MenuItemLogout;
