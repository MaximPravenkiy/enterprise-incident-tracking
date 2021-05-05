import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import NavMenu from 'components/Header/Menu/Menu';
import { changeKeyDepsOnPath } from 'redux/actions/login/login.actions';
import MenuItemsLogin from 'components/Header/Menu/MenuItemsLogin/MenuItemsLogin';
import MenuItemsLogout from 'components/Header/Menu/MenuItemsLogout/MenuItemsLogout';
import {
    changeActionWithListOfIncidents,
    getIncidents,
    getUsers
} from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { LoginActions } from 'redux/actions/login/login.interfaces';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import {
    logoutNotification,
    openLoadingMessage
} from 'common/services/notification.services';
import { KeysType } from 'common/types/login';
import { logout } from 'redux/actions/userInfo/userInfo.actions';
import { UserInfoActions } from 'redux/actions/userInfo/userInfo.interfaces';
import { MenuInfo } from '../../../../node_modules/rc-menu/lib/interface';

const navContent = [
    { text: 'Вход', url: 'login' },
    { text: 'Регистрация', url: 'registration' }
];

const MenuContainer: FC<RouteComponentProps> = memo(({ location, history }) => {
    const dispatch = useDispatch<
        Dispatch<LoginActions | UserInfoActions | IncidentsActions>
    >();
    const { keyDepsOnPath } = useSelector(
        ({ loginReducer }: RootReducer) => loginReducer
    );
    const { isAuth, fullname } = useSelector(
        ({ userInfoReducer }: RootReducer) => userInfoReducer
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
        dispatch(
            changeActionWithListOfIncidents({ actionWithIncidents: action })
        );
        dispatch(getIncidents());
    };

    const onLogout = () => {
        localStorage.clear();
        dispatch(logout());
        logoutNotification();
        history.push('/login');
    };

    const createIncident = () => {
        openLoadingMessage('Загружаем данные...');
        dispatch(getUsers());
    };

    const changeKey = ({ key }: MenuInfo) => {
        dispatch(
            changeKeyDepsOnPath({ keyDepsOnPath: key === '1' ? '1' : '2' })
        );
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

        dispatch(changeKeyDepsOnPath({ keyDepsOnPath: path }));
    }, [dispatch, location.pathname]);

    let key = 0;
    const menuItems = isAuth ? (
        <MenuItemsLogin
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
                <MenuItemsLogout
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
});

export default withRouter(MenuContainer);
