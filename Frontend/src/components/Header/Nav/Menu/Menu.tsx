import React from 'react';
import styled from "styled-components";
import {Menu} from "antd";
import {MenuProps} from "../../../../containers/MenuContainer";

const MenuCustom = styled(Menu)`
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100%;
`

const NavMenu = ({menuItems}: MenuProps) => {
    // console.log(params)
    return (
        <MenuCustom
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
        >
            {menuItems}
        </MenuCustom>
    );
}

export default NavMenu;