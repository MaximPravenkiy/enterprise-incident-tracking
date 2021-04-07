import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { notification } from 'antd';

const successNotification = (title: string, text: string) => {
    notification.success({
        message: title,
        description: text,
        duration: 3,
        style: {
            marginTop: '18vh'
        }
    });
};

const errorNotification = (title: string, text: string) => {
    notification.error({
        message: title,
        description: text,
        duration: 3,
        style: {
            marginTop: '18vh'
        }
    });
};

const logoutNotification = () => {
    notification.open({
        message: 'Всего доброго!',
        description: 'Спасибо за использование нашей системы!',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        duration: 3,
        style: {
            marginTop: '18vh'
        }
    });
};

export { successNotification, errorNotification, logoutNotification };
