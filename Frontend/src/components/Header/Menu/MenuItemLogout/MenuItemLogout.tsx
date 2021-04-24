import React, { FC } from 'react';
import { MenuItemCustom } from 'components/Header/Menu/MenuItemLogout/styles';
import { MenuItemLogoutProps } from 'components/Header/Menu/MenuItemLogout/interfaces';
import { NavLink } from 'react-router-dom';

const MenuItemLogout: FC<MenuItemLogoutProps> = ({
    key,
    url,
    text,
    ...props
}) => (
    <MenuItemCustom {...props} key={key}>
        <NavLink to={`/${url}`}>{text}</NavLink>
    </MenuItemCustom>
);

export default MenuItemLogout;
