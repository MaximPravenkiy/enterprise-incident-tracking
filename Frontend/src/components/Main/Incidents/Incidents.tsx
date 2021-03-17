import { Button } from 'antd';
import React from 'react';
import {DownloadOutlined} from "@ant-design/icons/lib";

const Incidents = () => {
    return (
        <>
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">
                Создать новый инцидент
            </Button>
        </>
    );
}

export default Incidents;