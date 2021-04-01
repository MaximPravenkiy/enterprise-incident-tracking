import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';

type MenuProps = {
    menuItems: JSX.Element | JSX.Element[];
};

const MenuCustom = styled(Menu)`
    display: flex;
    justify-content: center;
    height: 100%;
`;

const NavMenu: React.FC<MenuProps> = ({ menuItems }) => (
    <MenuCustom
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={
            window.location.pathname.includes('registration') ? ['2'] : ['1']
        }
    >
        {menuItems}
    </MenuCustom>
);

export default NavMenu;
