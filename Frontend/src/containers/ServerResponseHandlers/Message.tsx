import { message  } from 'antd';

const key = 'loading';

const openMessage = () => {
    message.loading({
            content: 'Проверяем данные...',
            duration: 0,
            key,
            style: {
                marginTop: '18vh',
            },
        });
};

const destroyMessage = () => {
    message.destroy(key);
}

export {openMessage, destroyMessage};