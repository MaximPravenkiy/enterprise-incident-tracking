import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

export type MenuItemLogoutProps = {
    text: string;
    url: string;
    key: string;
};

const MenuItemCustom = styled(Menu.Item)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 30%;
        text-transform: uppercase;
    }
`;

const NavLinkEx = styled(NavLink)`
    font-size: 2em;
`;

const MenuItemLogout: React.FC<MenuItemLogoutProps> = ({
    key,
    url,
    text,
    ...props
}) => (
    <>
        <MenuItemCustom {...props} key={key}>
            <NavLinkEx to={`./${url}`}>{text}</NavLinkEx>
        </MenuItemCustom>
    </>
);

export default MenuItemLogout;
