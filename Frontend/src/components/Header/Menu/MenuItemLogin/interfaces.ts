import { ActionWithIncidentsType } from 'common/interfaces/incidents';

export interface MenuItemLoginProps {
    fullname: string;
    onLogout: () => void;
    createIncident: () => void;
    actionWithIncidents: ActionWithIncidentsType;
    changeAction: () => void;
}
