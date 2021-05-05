import { Incident } from 'common/types/incidents';

export interface IncidentsProps {
    listOfIncidents: Incident[];
    isListOfIncidentsLoading: boolean;
}
