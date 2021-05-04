import { ActionWithIncidents } from 'common/types/incidents';

export interface MenuItemLoginProps {
    fullname: string;
    onLogout: () => void;
    createIncident: () => void;
    actionWithIncidents: ActionWithIncidents;
    changeAction: () => void;
}
