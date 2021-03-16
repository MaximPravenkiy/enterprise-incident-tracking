import React from 'react';
import styled from "styled-components";
import {Menu} from "antd";
import MenuItem from "./MenuItem/MenuItem";

const MenuCustom = styled(Menu)`
    display: flex;
    justify-content: center;
    height: 100%;
`

const navContent = [
    {text: 'Вход', url: 'authentication'},
    {text: 'Регистрация', url: 'registration'}
];

const NavMenu = () => {
    return (
        <MenuCustom
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
        >
            { navContent.map((content, index) => (
                <MenuItem
                    key={index + 1}
                    url={content.url}
                    text={content.text}
                />
            )) }
        </MenuCustom>
    );
}

export default NavMenu;