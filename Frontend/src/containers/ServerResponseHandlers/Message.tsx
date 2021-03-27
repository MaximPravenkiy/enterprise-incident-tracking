import { message  } from 'antd';

const key = 'loading';

const openMessage = (text: string): void => {
    message.loading({
            content: text,
            duration: 0,
            key,
            style: {
                marginTop: '18vh',
            },
        });
};

const destroyMessage = (): void => {
    message.destroy(key);
}

export {openMessage, destroyMessage};