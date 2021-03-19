import React from 'react';
import styled from "styled-components";
import {Menu} from "antd";
import { Typography } from 'antd';
import MenuItem from "./MenuItemLogout/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import { IdcardOutlined, SnippetsOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import {logout} from "../../../../redux/store/actions/loginCreator";
import {ScheduleOutlined} from "@ant-design/icons/lib";
import { NavLink } from 'react-router-dom';
import {getUsers} from "../../../../redux/store/actions/incidentsCreator";

const Text = styled(Typography.Text)`
    background: white;
`

const MenuCustom = styled(Menu)`
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100%;
`

const navContent = [
    {text: 'Вход', url: 'login'},
    {text: 'Регистрация', url: 'registration'}
];


const CreateNewIncBut = styled(Button)`
    display: flex;
    align-items: center;
    height: 60%;
`

const NavMenu = () => {
    const dispatch = useDispatch();
    const {isAuth, fullname}: any = useSelector(({loginReducer}: any) => loginReducer);

    const onLogout = () => {
        localStorage.removeItem('userData');
        dispatch(logout());
    }

    /// Отображение меню в зависимости от аутентификации

    const menuItems = isAuth ?
        (
            <React.Fragment>
                <div>
                    <SnippetsOutlined />
                    INCIDENT TRACKING
                    <IdcardOutlined />
                </div>
                <NavLink to='/incidents/create-incident'>
                    <CreateNewIncBut
                        type="primary"
                        shape="round"
                        icon={<ScheduleOutlined />}
                        onClick={() => dispatch(getUsers())}
                    >
                        Создать новый инцидент
                    </CreateNewIncBut>
                </NavLink>
                <Text keyboard>{fullname}</Text>
                <Button danger ghost onClick={onLogout}>Logout</Button>
            </React.Fragment>
        ) :
        navContent.map((content, index) => (
            <MenuItem
                key={index + 1}
                url={content.url}
                text={content.text}
            />
        ));

    return (
        <MenuCustom
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
        >
            { menuItems }
        </MenuCustom>
    );
}

export default NavMenu;