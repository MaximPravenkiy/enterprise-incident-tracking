import React, { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import NavMenu from 'components/Header/Menu/Menu';
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
import { logoutNotification } from 'common/services/notification.services';
import { logout } from 'redux/actions/userInfo/userInfo.actions';
import { UserInfoActions } from 'redux/actions/userInfo/userInfo.interfaces';

const navContent = [
    { text: 'Вход', url: '/login' },
    { text: 'Регистрация', url: '/registration' }
];

const MenuContainer: FC<RouteComponentProps> = memo(({ history }) => {
    const dispatch = useDispatch<
        Dispatch<LoginActions | UserInfoActions | IncidentsActions>
    >();
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
        dispatch(logout());
        localStorage.clear();
        logoutNotification();
        history.push('/login');
    };

    const createIncident = () => {
        dispatch(getUsers());
    };

    const menuItems = isAuth ? (
        <MenuItemsLogin
            fullname={fullname}
            createIncident={createIncident}
            onLogout={onLogout}
            actionWithIncidents={actionWithIncidents}
            changeAction={changeAction}
        />
    ) : (
        navContent.map((content) => (
            <MenuItemsLogout
                key={content.url}
                url={content.url}
                text={content.text}
            />
        ))
    );

    return <NavMenu menuItems={menuItems} />;
});

export default withRouter(MenuContainer);
