import React, { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers/root.reducer';
import { CreateIncident, Incident } from 'common/types/incidents';
import { updateIncident } from 'redux/actions/incidents/incidents.actions';
import { Dispatch } from 'redux';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import { getDate } from 'common/helpers';
import IncidentForm from './IncidentForm';

const EditIncidentFormContainer = memo(() => {
    const {
        listOfIncidents,
        users,
        isEditModalVisible,
        editedIncidentId
    } = useSelector(({ incidentsReducer }: RootReducer) => incidentsReducer);
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const editIncidentData = useMemo(
        () =>
            listOfIncidents.find(
                (incident) => incident._id === editedIncidentId
            ) as Incident,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editedIncidentId]
    );
    const valuesEditIncidentForm = useMemo(
        () =>
            editIncidentData
                ? {
                      ...editIncidentData,
                      startDate: getDate(editIncidentData.startDate),
                      dueDate: getDate(editIncidentData.dueDate)
                  }
                : {
                      area: '',
                      assignee: '',
                      description: '',
                      dueDate: getDate(),
                      incidentName: '',
                      priority: '',
                      startDate: getDate(),
                      status: '',
                      _id: ''
                  },
        [editIncidentData]
    );

    const onFinish = useCallback(
        (values: CreateIncident) => {
            const incidentFormData = {
                ...values,
                owner: editIncidentData.owner
            };

            dispatch(updateIncident(incidentFormData, editedIncidentId));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [editIncidentData]
    );

    return (
        <IncidentForm
            users={users}
            isModalVisible={isEditModalVisible}
            actionWithIncidentForm="Обновить"
            onFinish={onFinish}
            valuesIncidentForm={valuesEditIncidentForm}
        />
    );
});

export default EditIncidentFormContainer;
