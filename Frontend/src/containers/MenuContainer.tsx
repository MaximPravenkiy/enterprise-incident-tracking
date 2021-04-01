import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { v4 as uuid } from 'uuid';
import NavMenu from '../components/Header/Nav/Menu/Menu';
import { logout } from '../redux/store/actions/loginCreator';
import MenuItemLogin from '../components/Header/Nav/Menu/MenuItemLogin/MenuItemLogin';
import MenuItemLogout from '../components/Header/Nav/Menu/MenuItemLogout/MenuItemLogout';
import { getUsers } from '../redux/store/actions/incidentsCreator';
import { openMessage } from './ServerResponseHandlers/Message';
import { RootReducer } from '../redux/store/reducers/rootReducer';
import { LoginType } from '../redux/store/reducers/loginReducer';
import { IncidentsType } from '../redux/store/reducers/incidentsReducer';

const navContent = [
    { text: 'Вход', url: 'login' },
    { text: 'Регистрация', url: 'registration' }
];

const MenuContainer = () => {
    const dispatch = useDispatch<Dispatch<LoginType | IncidentsType>>();
    const { isAuth, fullname } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer
    );

    const onLogout = () => {
        localStorage.removeItem('userData');
        dispatch(logout());
    };

    const createIncident = () => {
        openMessage('Загружаем данные...');
        dispatch(getUsers());
    };

    /// Отображение меню в зависимости от аутентификации

    const menuItems = isAuth ? (
        <MenuItemLogin
            fullname={fullname}
            createIncident={createIncident}
            onLogout={onLogout}
        />
    ) : (
        navContent.map((content) => (
            <MenuItemLogout
                key={uuid()}
                url={content.url}
                text={content.text}
            />
        ))
    );

    return <NavMenu menuItems={menuItems} />;
};

export default MenuContainer;
