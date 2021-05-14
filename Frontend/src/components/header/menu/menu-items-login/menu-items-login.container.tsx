import React, { FC, memo, useCallback } from 'react';
import { connect, useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers/root.reducer';
import {
    getIncidents,
    getUsers,
    showAllIncidents,
    showCreateIncident,
    showOwnIncidents
} from 'redux/actions/incidents/incidents.actions';
import { logoutNotification } from 'common/services/notification.services';
import { onLogout } from 'redux/actions/user-info/user-info.actions';
import MenuItemsLogin from './menu-items-login.component';
import { MenuItemsLoginContainerProps } from './menu-items-login.interfaces';

const MenuItemsLoginContainer: FC<MenuItemsLoginContainerProps> = memo(
    ({
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

        const changeTheShowingOfIncidents = useCallback(() => {
            if (isOwnIncidents) {
                dispatchShowAllIncidents();
            } else {
                dispatchShowOwnIncidents();
            }

            localStorage.setItem(
                'isOwnIncidents',
                JSON.stringify(!isOwnIncidents)
            );

            dispatchGetIncidents();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [isOwnIncidents]);

        const logout = useCallback(() => {
            logoutNotification();
            dispatchOnLogout();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const createIncident = useCallback(() => {
            dispatchGetUsers();
            dispatchShowCreateIncident();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <MenuItemsLogin
                isOwnIncidents={isOwnIncidents}
                fullname={fullname}
                createIncident={createIncident}
                logout={logout}
                changeTheShowingOfIncidents={changeTheShowingOfIncidents}
            />
        );
    }
);

const mapDispatchToProps = {
    dispatchOnLogout: onLogout,
    dispatchShowAllIncidents: showAllIncidents,
    dispatchShowOwnIncidents: showOwnIncidents,
    dispatchGetIncidents: getIncidents,
    dispatchGetUsers: getUsers,
    dispatchShowCreateIncident: showCreateIncident
};

export default connect(null, mapDispatchToProps)(MenuItemsLoginContainer);
