import React, { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {
    getIncidents,
    getUsers,
    showAllIncidents,
    showOwnIncidents
} from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import { logoutNotification } from 'common/services/notification.services';
import { logout } from 'redux/actions/userInfo/userInfo.actions';
import { UserInfoActions } from 'redux/actions/userInfo/userInfo.interfaces';
import MenuItemsLogin from './MenuItemsLogin/MenuItemsLogin';
import NavMenu from './Menu';
import MenuItemsLogout from './Menu.data';

const MenuContainer: FC<RouteComponentProps> = memo(({ history }) => {
    const dispatch = useDispatch<
        Dispatch<UserInfoActions | IncidentsActions>
    >();
    const { isAuth, fullname } = useSelector(
        ({ userInfoReducer }: RootReducer) => userInfoReducer
    );
    const { isOwnIncidents } = useSelector(
        ({ incidentsReducer }: RootReducer) => incidentsReducer
    );

    const changeTheShowingOfIncidents = () => {
        if (isOwnIncidents) {
            dispatch(showAllIncidents());
        } else {
            dispatch(showOwnIncidents());
        }

        localStorage.setItem('isOwnIncidents', JSON.stringify(!isOwnIncidents));

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
            isOwnIncidents={isOwnIncidents}
            fullname={fullname}
            createIncident={createIncident}
            onLogout={onLogout}
            changeTheShowingOfIncidents={changeTheShowingOfIncidents}
        />
    ) : (
        MenuItemsLogout
    );

    return <NavMenu menuItems={menuItems} />;
});

export default withRouter(MenuContainer);
