import React from 'react';
import { Spin } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons/lib';
import { SpanCustom } from 'components/Main/Forms/CreateIncidents/TitleModal/styles';

const TitleModal = () => (
    <>
        <Spin />
        <SpanCustom>ISCANDER</SpanCustom>
        <CopyrightOutlined />
        &nbsp;
        <span>Incident Creator</span>
    </>
);

export default TitleModal;
