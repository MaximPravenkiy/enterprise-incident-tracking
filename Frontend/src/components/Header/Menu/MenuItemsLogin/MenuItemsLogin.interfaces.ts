import { OnLogoutAction } from 'redux/actions/userInfo/userInfo.interfaces';
import {
    GetIncidentsAction,
    GetUsersAction,
    ShowAllIncidentsAction,
    ShowOwnIncidentsAction
} from 'redux/actions/incidents/incidents.interfaces';

interface MenuItemLoginProps {
    isOwnIncidents: boolean;
    fullname: string;
    logout: () => void;
    createIncident: () => void;
    changeTheShowingOfIncidents: () => void;
}

interface MenuItemsLoginContainerProps {
    dispatchOnLogout: () => OnLogoutAction;
    dispatchShowAllIncidents: () => ShowAllIncidentsAction;
    dispatchShowOwnIncidents: () => ShowOwnIncidentsAction;
    dispatchGetIncidents: () => GetIncidentsAction;
    dispatchGetUsers: () => GetUsersAction;
}

export type { MenuItemLoginProps, MenuItemsLoginContainerProps };
