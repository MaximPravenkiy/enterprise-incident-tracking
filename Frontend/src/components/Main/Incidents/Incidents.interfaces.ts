import { ListOfIncidents } from 'common/types/incidents';

export interface IncidentsProps {
    listOfIncidents: Array<ListOfIncidents>;
    isListOfIncidentsLoading: boolean;
}
