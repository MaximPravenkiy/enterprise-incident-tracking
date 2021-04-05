import React, { FC } from 'react';
import {
    MenuItemCustom,
    NavLinkEx
} from 'components/Header/Menu/MenuItemLogout/styles';
import { MenuItemLogoutProps } from 'components/Header/Menu/MenuItemLogout/interfaces';

const MenuItemLogout: FC<MenuItemLogoutProps> = ({
    key,
    url,
    text,
    ...props
}) => (
    <>
        <MenuItemCustom {...props} key={key}>
            <NavLinkEx to={`/${url}`}>{text}</NavLinkEx>
        </MenuItemCustom>
    </>
);

export default MenuItemLogout;
