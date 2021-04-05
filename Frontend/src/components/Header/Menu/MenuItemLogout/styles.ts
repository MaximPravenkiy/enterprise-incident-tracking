import styled from 'styled-components';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

export const MenuItemCustom = styled(Menu.Item)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 30%;
        text-transform: uppercase;
    }
`;

export const NavLinkEx = styled(NavLink)`
    font-size: 2em;
`;
