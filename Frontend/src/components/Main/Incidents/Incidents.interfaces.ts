import { ListOfIncidents } from 'common/types/incidents';

export interface IncidentsProps {
    listOfIncidents: ListOfIncidents[];
    isListOfIncidentsLoading: boolean;
}
