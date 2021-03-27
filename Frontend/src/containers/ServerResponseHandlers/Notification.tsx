import { notification } from 'antd';

const successNotification = (title: string, text: string )=> {
    notification.success({
        message: title,
        description: text,
        duration: 3,
        style: {
            marginTop: '18vh',
        }
    });
};

const errorNotification = (title: string, text: string ) => {
    notification.error({
        message: title,
        description: text,
        duration: 3,
        style: {
            marginTop: '18vh',
        }
    });
};

export {successNotification, errorNotification} ;