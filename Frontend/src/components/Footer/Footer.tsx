import React from 'react';
import { SettingOutlined, ToolOutlined } from '@ant-design/icons';
import { FooterCustom, StyleSpan } from 'components/Footer/Footer.styles';

const Footer = () => (
    <FooterCustom>
        <ToolOutlined />
        <StyleSpan>iscander</StyleSpan>
        <SettingOutlined />
    </FooterCustom>
);

export default Footer;
