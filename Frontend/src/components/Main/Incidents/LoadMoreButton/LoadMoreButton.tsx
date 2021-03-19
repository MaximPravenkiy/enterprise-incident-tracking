import React from 'react';
import {Button} from "antd";

const LoadMoreButton = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button onClick={() => {
            }}>loading more</Button>
        </div>
    );
}

export default LoadMoreButton;