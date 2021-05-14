import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getIncidents } from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/root.reducer';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import Incidents from './incidents.component';

const IncidentsContainer = memo(() => {
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();
    const { listOfIncidents, isListOfIncidentsLoading } = useSelector(
        ({ incidentsReducer }: RootReducer) => incidentsReducer
    );

    useEffect(() => {
        dispatch(getIncidents());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Incidents
            listOfIncidents={listOfIncidents}
            isListOfIncidentsLoading={isListOfIncidentsLoading}
        />
    );
});

export default IncidentsContainer;
