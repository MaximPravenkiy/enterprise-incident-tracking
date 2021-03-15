import React from 'react';
import styled from "styled-components";
import {Layout} from "antd";
import NavMenu from "./Nav/Menu/Menu";

const HeaderCustom = styled(Layout.Header)`
    height: 15vh;
`

const Header = () => {
    return (
        <HeaderCustom>
            <NavMenu/>
        </HeaderCustom>
    );
}

export default Header;