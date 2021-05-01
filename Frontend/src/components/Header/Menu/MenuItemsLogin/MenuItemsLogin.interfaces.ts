import { ActionWithIncidentsType } from 'common/types/incidents';

export interface MenuItemLoginProps {
    fullname: string;
    onLogout: () => void;
    createIncident: () => void;
    actionWithIncidents: ActionWithIncidentsType;
    changeAction: () => void;
}
