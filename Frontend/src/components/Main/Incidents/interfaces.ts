import { ListOfIncidents } from 'common/interfaces/incidents';

export interface IncidentsTypeProps {
    listOfIncidents: Array<ListOfIncidents>;
    isListOfIncidentsLoading: boolean;
}
