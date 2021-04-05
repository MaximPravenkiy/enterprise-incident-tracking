import { IListOfIncidents } from 'common/interfaces/incidents';

export interface IncidentsTypeProps {
    listOfIncidents: Array<IListOfIncidents>;
    isListOfIncidentsLoading: boolean;
}
