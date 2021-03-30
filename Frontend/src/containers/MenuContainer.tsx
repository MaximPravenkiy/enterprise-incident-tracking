import React from 'react';
import NavMenu from "../components/Header/Nav/Menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/store/actions/loginCreator";
import MenuItemLogin from "../components/Header/Nav/Menu/MenuItemLogin/MenuItemLogin";
import MenuItemLogout from "../components/Header/Nav/Menu/MenuItemLogout/MenuItemLogout";
import {getUsers} from "../redux/store/actions/incidentsCreator";
import {openMessage} from "./ServerResponseHandlers/Message";
import {RootReducer} from "../redux/store/reducers/rootReducer";
import {Dispatch} from "redux";
import {LoginType} from "../redux/store/actions/Types/loginTypes";
import {IncidentsType} from "../redux/store/actions/Types/incidentsTypes";

export type MenuProps = {
    menuItems:  JSX.Element | JSX.Element[]
}

export type MenuItemLoginProps = {
    fullname: string
    onLogout: () => void
    createIncident: () => void
}

export type MenuItemLogoutProps = {
    text: string
    url: string
    key: number
}

const navContent = [
    {text: 'Вход', url: 'login'},
    {text: 'Регистрация', url: 'registration'}
];

const MenuContainer = () => {
    const dispatch = useDispatch<Dispatch<LoginType | IncidentsType>>();
    const {isAuth, fullname} = useSelector(({loginReducer}: RootReducer) => loginReducer);

    const onLogout = () => {
        localStorage.removeItem('userData');
        dispatch(logout());
    }
    
    const createIncident = () => {
        openMessage('Загружаем данные...');
        dispatch(getUsers());
    }

    /// Отображение меню в зависимости от аутентификации

    const menuItems = isAuth ?
        <MenuItemLogin
            fullname={fullname}
            createIncident={createIncident}
            onLogout={onLogout}
        /> :
        navContent.map((content, index) => (
            <MenuItemLogout
                key={index + 1}
                url={content.url}
                text={content.text}
            />
        ));

    return (
        <NavMenu menuItems={menuItems}/>
    );
}

export default MenuContainer;