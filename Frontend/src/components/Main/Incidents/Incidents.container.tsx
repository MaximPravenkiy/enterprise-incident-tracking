import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { getIncidents } from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import Incidents from './Incidents';

const IncidentsContainer = () => {
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();
    const { listOfIncidents, isListOfIncidentsLoading } = useSelector(
        ({ incidentsReducer }: RootReducer) => incidentsReducer
    );

    useEffect(() => {
        dispatch(getIncidents());
    }, [dispatch]);

    return (
        <Incidents
            listOfIncidents={listOfIncidents}
            isListOfIncidentsLoading={isListOfIncidentsLoading}
        />
    );
};

export default IncidentsContainer;
