import React from 'react';
import { Result, Button } from 'antd';
import { NavLink } from 'react-router-dom';

const InvalidPage = () => (
    <Result
        status="404"
        title="404 - Ooops, page not found!"
        subTitle="Sorry, the page you visited does not exist."
        extra={
            <NavLink to="/login">
                <Button type="primary">Back Home</Button>
            </NavLink>
        }
    />
);

export default InvalidPage;
