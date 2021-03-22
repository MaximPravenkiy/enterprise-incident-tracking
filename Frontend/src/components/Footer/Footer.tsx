import React from 'react';
import styled from "styled-components";
import {Layout} from "antd";
import {SettingOutlined, ToolOutlined } from '@ant-design/icons';

const FooterCustom = styled(Layout.Footer)`
    height: 15vh;
    text-align: center;
    padding: 5px 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A9A9A9;
`

const StyleSpan = styled.span`
    font-size: 2.2em;
    text-transform: uppercase;
    margin: 0 10px;
`

const Footer = () => {
    return (
        <FooterCustom>
            <ToolOutlined/>
            <StyleSpan>iscander</StyleSpan>
            <SettingOutlined />
        </FooterCustom>
    );
}

export default Footer;