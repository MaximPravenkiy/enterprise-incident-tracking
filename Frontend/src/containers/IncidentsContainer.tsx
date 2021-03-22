import React, {useEffect} from 'react';
import Incidents from "../components/Main/Incidents/Incidents";
import {useDispatch, useSelector} from "react-redux";
import {getIncidents} from "../redux/store/actions/incidentsCreator";

export interface IncidentsProps {
    listOfIncidents: any
}

const IncidentsContainer = () => {
    const dispatch = useDispatch();
    const {listOfIncidents} = useSelector(({incidentsReducer}: any) => incidentsReducer);

    useEffect(() => {
        dispatch(getIncidents());
    }, [dispatch]);

    return (
        <Incidents listOfIncidents={listOfIncidents}/>
    );
}

export default IncidentsContainer;