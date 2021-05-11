import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createIncident,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/rootReducer';
import {
    CreateIncident,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import { useDebouncedCallback } from 'use-debounce';
import { Dispatch } from 'redux';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import IncidentForm from './IncidentForm';

const CreateIncidentFormContainer = () => {
    const {
        users,
        isCreateModalVisible,
        valuesCreateIncidentForm
    } = useSelector(({ incidentsReducer }: RootReducer) => incidentsReducer);

    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const onChange = (value: ValuesCreateIncidentsForm) => {
        dispatch(updateValuesCreateIncidentForm({ updatedValue: value }));
    };
    const debouncedHandleResize = useDebouncedCallback(onChange, 500);

    const onFinish = (values: CreateIncident) => {
        const assigneeCandidate = users.find(
            (user) => user.id === values.assignee
        );
        const assignee = assigneeCandidate ? assigneeCandidate.label : '';
        const incidentFormData = {
            ...values,
            assignee,
            owner: values.assignee
        };

        dispatch(
            createIncident({
                valuesCreateIncidentForm: incidentFormData
            })
        );
    };

    return (
        <IncidentForm
            users={users}
            isModalVisible={isCreateModalVisible}
            onFinish={onFinish}
            valuesIncidentForm={valuesCreateIncidentForm}
            onChange={debouncedHandleResize}
            actionWithIncidentForm="Создать"
        />
    );
};

export default CreateIncidentFormContainer;
