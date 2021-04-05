import React from 'react';
import { SettingOutlined, ToolOutlined } from '@ant-design/icons';
import { FooterCustom, StyleSpan } from 'components/Footer/style';

const Footer = () => (
    <FooterCustom>
        <ToolOutlined />
        <StyleSpan>iscander</StyleSpan>
        <SettingOutlined />
    </FooterCustom>
);

export default Footer;
