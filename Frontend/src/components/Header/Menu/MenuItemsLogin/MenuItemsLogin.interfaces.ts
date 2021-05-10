export interface MenuItemLoginProps {
    isOwnIncidents: boolean;
    fullname: string;
    onLogout: () => void;
    createIncident: () => void;
    changeTheShowingOfIncidents: () => void;
}
