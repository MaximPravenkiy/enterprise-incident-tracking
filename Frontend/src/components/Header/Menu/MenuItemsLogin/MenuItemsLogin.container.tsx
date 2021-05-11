import React, { FC } from 'react';
import { connect, useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers/rootReducer';
import {
    getIncidents,
    getUsers,
    showAllIncidents,
    showCreateIncident,
    showOwnIncidents
} from 'redux/actions/incidents/incidents.actions';
import { logoutNotification } from 'common/services/notification.services';
import { onLogout } from 'redux/actions/userInfo/userInfo.actions';
import MenuItemsLogin from './MenuItemsLogin';
import { MenuItemsLoginContainerProps } from './MenuItemsLogin.interfaces';

const MenuItemsLoginContainer: FC<MenuItemsLoginContainerProps> = ({
    dispatchOnLogout,
    dispatchShowAllIncidents,
    dispatchShowOwnIncidents,
    dispatchGetIncidents,
    dispatchGetUsers,
    dispatchShowCreateIncident
}) => {
    const { fullname, isOwnIncidents } = useSelector(
        ({ userInfoReducer, incidentsReducer }: RootReducer) => ({
            fullname: userInfoReducer.fullname,
            isOwnIncidents: incidentsReducer.isOwnIncidents
        })
    );

    const changeTheShowingOfIncidents = () => {
        if (isOwnIncidents) {
            dispatchShowAllIncidents();
        } else {
            dispatchShowOwnIncidents();
        }

        localStorage.setItem('isOwnIncidents', JSON.stringify(!isOwnIncidents));

        dispatchGetIncidents();
    };

    const logout = () => {
        logoutNotification();
        dispatchOnLogout();
    };

    const createIncident = () => {
        dispatchGetUsers();
        dispatchShowCreateIncident();
    };

    return (
        <MenuItemsLogin
            isOwnIncidents={isOwnIncidents}
            fullname={fullname}
            createIncident={createIncident}
            logout={logout}
            changeTheShowingOfIncidents={changeTheShowingOfIncidents}
        />
    );
};

const mapDispatchToProps = {
    dispatchOnLogout: onLogout,
    dispatchShowAllIncidents: showAllIncidents,
    dispatchShowOwnIncidents: showOwnIncidents,
    dispatchGetIncidents: getIncidents,
    dispatchGetUsers: getUsers,
    dispatchShowCreateIncident: showCreateIncident
};

export default connect(null, mapDispatchToProps)(MenuItemsLoginContainer);
