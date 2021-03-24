import React from 'react';
import styled from "styled-components";
import {Menu} from "antd";
import {MenuProps} from "../../../../containers/MenuContainer";

const MenuCustom = styled(Menu)`
    display: flex;
    justify-content: center;
    height: 100%;
`

const NavMenu = ({menuItems}: MenuProps) => {
    return (
        <MenuCustom
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={window.location.pathname.includes('login') ? ['1'] : ['2']}
        >
            {menuItems}
        </MenuCustom>
    );
}

export default NavMenu;