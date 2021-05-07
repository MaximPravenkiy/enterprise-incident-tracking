import React, { FC, memo } from 'react';
import { MenuItemCustom } from 'components/Header/Menu/MenuItemsLogout/MenuItemsLogout.styles';
import { MenuItemLogoutProps } from 'components/Header/Menu/MenuItemsLogout/MenuItemsLogout.interfaces';
import { NavLink } from 'react-router-dom';

const MenuItemsLogout: FC<MenuItemLogoutProps> = memo(
    ({ key, url, text, ...props }) => (
        <MenuItemCustom {...props} key={key}>
            <NavLink to={`${url}`}>{text}</NavLink>
        </MenuItemCustom>
    )
);

export default MenuItemsLogout;
