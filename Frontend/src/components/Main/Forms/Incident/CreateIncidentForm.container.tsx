import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createIncident,
    updateValuesCreateIncidentForm
} from 'redux/actions/incidents/incidents.actions';
import { RootReducer } from 'redux/reducers/root.reducer';
import {
    CreateIncident,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';
import { useDebouncedCallback } from 'use-debounce';
import { Dispatch } from 'redux';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import IncidentForm from './IncidentForm';

const CreateIncidentFormContainer = memo(() => {
    const {
        users,
        isCreateModalVisible,
        valuesCreateIncidentForm
    } = useSelector(({ incidentsReducer }: RootReducer) => incidentsReducer);

    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const onChange = useCallback((value: ValuesCreateIncidentsForm) => {
        dispatch(updateValuesCreateIncidentForm({ updatedValue: value }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const debouncedHandleResize = useDebouncedCallback(onChange, 500);

    const onFinish = useCallback((values: CreateIncident) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
});

export default CreateIncidentFormContainer;
