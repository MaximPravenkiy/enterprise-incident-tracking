import React from 'react';
import { Spin } from 'antd';
import {CopyrightOutlined} from "@ant-design/icons/lib";
import styled from "styled-components";

const SpanCustom = styled.span`
    margin: 0 10px;
    font-weight: bold;
    font-style: italic;
    font-size: 1.2em;
    line-height: 1.2em;
    color: red;
`

const TitleModal = () => {
    return (
        <>
            <Spin />
            <SpanCustom>ISCANDER</SpanCustom>
            <CopyrightOutlined />&nbsp;
            <span>Incident Creator</span>
        </>
    );
}

export default TitleModal;