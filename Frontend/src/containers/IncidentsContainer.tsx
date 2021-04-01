import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import Incidents from '../components/Main/Incidents/Incidents';
import { getIncidents } from '../redux/store/actions/incidentsCreator';
import { RootReducer } from '../redux/store/reducers/rootReducer';
import { IncidentsType } from '../redux/store/reducers/incidentsReducer';

const IncidentsContainer = () => {
    const dispatch = useDispatch<Dispatch<IncidentsType>>();
    const { listOfIncidents } = useSelector(
        ({ incidentsReducer }: RootReducer) => incidentsReducer
    );

    useEffect(() => {
        dispatch(getIncidents());
    }, [dispatch]);

    return <Incidents listOfIncidents={listOfIncidents} />;
};

export default IncidentsContainer;
