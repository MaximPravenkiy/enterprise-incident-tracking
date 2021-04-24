import React, { FC } from 'react';
import { MenuCustom } from 'components/Header/Menu/styles';
import { MenuProps } from 'components/Header/Menu/interfaces';

const NavMenu: FC<MenuProps> = ({ menuItems, keyDepsOnPath, changeKey }) => (
    <MenuCustom
        theme="dark"
        mode="horizontal"
        selectedKeys={[keyDepsOnPath]}
        onClick={changeKey}
    >
        {menuItems}
    </MenuCustom>
);

export default NavMenu;
