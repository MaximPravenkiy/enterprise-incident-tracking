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
import { openMessage } from 'common/serverResponseHandlers/message';
import { LoginType } from 'redux/store/actions/login/interfaces';
import { IncidentsType } from 'redux/store/actions/incidents/interfaces';
import { logoutNotification } from 'common/serverResponseHandlers/notification';
import { KeysType } from 'common/interfaces/login';
import { MenuInfo } from '../../node_modules/rc-menu/lib/interface';

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
        let path: KeysType;

        if (location.pathname === '/login') {
            path = '1';
        } else if (location.pathname === '/registration') {
            path = '2';
        } else {
            path = '0';
        }

        dispatch(changeKeyDepsOnPath(path));
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
