import { ListOfIncidents } from 'common/types/incidents';

export interface IncidentsTypeProps {
    listOfIncidents: Array<ListOfIncidents>;
    isListOfIncidentsLoading: boolean;
}
