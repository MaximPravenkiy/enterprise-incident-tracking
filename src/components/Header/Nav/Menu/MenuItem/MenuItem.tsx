import React from 'react';
import styled from "styled-components";
import {Menu} from "antd";
import {NavLink} from 'react-router-dom';

const MenuItemCustom = styled(Menu.Item)`
    && {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 30%;
        text-transform: uppercase;
    }
`

const NavLinkEx = styled(NavLink)`
    font-size: 2em;
`

const MenuItem = (props: any) => {
    return (
        <>
            <MenuItemCustom {...props} key={props.key}>
                <NavLinkEx to={`./${props.url}`}>
                    {props.text}
                </NavLinkEx>
            </MenuItemCustom>
        </>
    );
}

export default MenuItem;