import React, {useEffect} from 'react';
import Incidents from "../components/Main/Incidents/Incidents";
import {useDispatch, useSelector} from "react-redux";
import {getIncidents} from "../redux/store/actions/incidentsCreator";
import {RootReducer} from "../redux/store/reducers/rootReducer";
import {Dispatch} from "redux";
import {IncidentsType} from "../redux/store/actions/Types/incidentsTypes";

export interface IncidentsProps {
    listOfIncidents: any
}

const IncidentsContainer = () => {
    const dispatch = useDispatch<Dispatch<IncidentsType>>();
    const {listOfIncidents} = useSelector(({incidentsReducer}: RootReducer) => incidentsReducer);

    useEffect(() => {
        dispatch(getIncidents());
    }, [dispatch]);

    return (
        <Incidents listOfIncidents={listOfIncidents}/>
    );
}

export default IncidentsContainer;