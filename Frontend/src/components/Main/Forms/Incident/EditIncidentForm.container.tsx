import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers/rootReducer';
import { CreateIncident, Incident } from 'common/types/incidents';
import { updateIncident } from 'redux/actions/incidents/incidents.actions';
import { Dispatch } from 'redux';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';
import { getDate } from 'common/helpers';
import IncidentForm from './IncidentForm';

const EditIncidentFormContainer = () => {
    const {
        listOfIncidents,
        users,
        isEditModalVisible,
        editedIncidentId
    } = useSelector(({ incidentsReducer }: RootReducer) => incidentsReducer);
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const editIncidentData = listOfIncidents.find(
        (incident) => incident._id === editedIncidentId
    ) as Incident;
    const valuesEditIncidentForm = editIncidentData
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
          };

    const onFinish = (values: CreateIncident) => {
        const incidentFormData = {
            ...values,
            owner: editIncidentData.owner
        };

        dispatch(
            updateIncident({
                updateData: { incidentFormData, editedIncidentId }
            })
        );
    };

    return (
        <IncidentForm
            users={users}
            isModalVisible={isEditModalVisible}
            actionWithIncidentForm="Обновить"
            onFinish={onFinish}
            valuesIncidentForm={valuesEditIncidentForm}
        />
    );
};

export default EditIncidentFormContainer;
