import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import NavMenu from 'components/Header/Menu/Menu';
import {
    changeKeyDepsOnPath,
    logout
} from 'redux/store/actions/login/loginCreator';
import MenuItemLogin from 'components/Header/Menu/MenuItemLogin/MenuItemLogin';
import MenuItemLogout from 'components/Header/Menu/MenuItemLogout/MenuItemLogout';
import {
    changeActionWithListOfIncidents,
    getIncidents,
    getUsers
} from 'redux/store/actions/incidents/incidentsCreator';
import { RootReducer } from 'redux/store/reducers/rootReducer';
import { openMessage } from 'common/ServerResponseHandlers/Message';
import { LoginType } from 'redux/store/actions/login/interfaces';
import { IncidentsType } from 'redux/store/actions/incidents/interfaces';
import { MenuInfo } from '../../node_modules/rc-menu/lib/interface';
import { logoutNotification } from '../common/ServerResponseHandlers/Notification';

const navContent = [
    { text: 'Вход', url: 'login' },
    { text: 'Регистрация', url: 'registration' }
];

const MenuContainer: FC<RouteComponentProps> = ({ location }) => {
    const dispatch = useDispatch<Dispatch<LoginType | IncidentsType>>();
    const { isAuth, fullname, keyDepsOnPath } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer
    );
    const { actionWithIncidents } = useSelector(
        ({ incidentsReducer }: RootReducer) => incidentsReducer
    );

    const changeAction = () => {
        localStorage.setItem('actionWithIncidents', actionWithIncidents);
        const action =
            actionWithIncidents === 'Показать мои инциденты'
                ? 'Показать все инциденты'
                : 'Показать мои инциденты';
        dispatch(changeActionWithListOfIncidents(action));
        dispatch(getIncidents());
    };

    const onLogout = () => {
        localStorage.clear();
        dispatch(logout());
        logoutNotification();
    };

    const createIncident = () => {
        openMessage('Загружаем данные...');
        dispatch(getUsers());
    };

    const changeKey = ({ key }: MenuInfo) => {
        dispatch(changeKeyDepsOnPath(key === '1' ? '1' : '2'));
    };

    useEffect(() => {
        dispatch(
            changeKeyDepsOnPath(
                location.pathname === '/registration' ? '2' : '1'
            )
        );
    }, [dispatch, location.pathname]);

    // Отображение меню в зависимости от аутентификации
    let key = 0;
    const menuItems = isAuth ? (
        <MenuItemLogin
            fullname={fullname}
            createIncident={createIncident}
            onLogout={onLogout}
            actionWithIncidents={actionWithIncidents}
            changeAction={changeAction}
        />
    ) : (
        navContent.map((content) => {
            key += 1;
            return (
                <MenuItemLogout
                    key={key}
                    url={content.url}
                    text={content.text}
                />
            );
        })
    );

    return (
        <NavMenu
            menuItems={menuItems}
            keyDepsOnPath={keyDepsOnPath}
            changeKey={changeKey}
        />
    );
};

export default withRouter(MenuContainer);
