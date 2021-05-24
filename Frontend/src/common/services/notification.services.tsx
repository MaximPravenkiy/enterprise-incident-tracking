import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { message, notification } from 'antd';

interface NotificationArguments {
    title: string;
    text: string;
    duration: number;
    icon?: JSX.Element;
}

interface NotificationOptions {
    message: string;
    description: string;
    duration: number;
    style: {
        marginTop: string;
    };
    icon?: JSX.Element;
}

const getNotificationOptions = ({
    title,
    text,
    duration,
    icon
}: NotificationArguments): NotificationOptions => ({
    message: title,
    description: text,
    duration,
    style: {
        marginTop: '18vh'
    },
    icon
});

const successNotification = (title: string, text: string) => {
    notification.success(getNotificationOptions({ title, text, duration: 3 }));
};

const errorNotification = (title: string, text: string) => {
    notification.error(getNotificationOptions({ title, text, duration: 3 }));
};

const logoutNotification = () => {
    notification.open(
        getNotificationOptions({
            title: 'Всего доброго!',
            text: 'Спасибо за использование нашей системы!',
            duration: 3,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />
        })
    );
};

const KEY = 'loading';

const openLoadingMessage = (text: string) => {
    message.loading({
        content: text,
        duration: 0,
        key: KEY,
        style: {
            marginTop: '18vh'
        }
    });
};

const destroyLoadingMessage = () => {
    message.destroy(KEY);
};

export {
    successNotification,
    errorNotification,
    logoutNotification,
    openLoadingMessage,
    destroyLoadingMessage
};
