import React, { FC } from 'react';
import CreateIncidentsContainer from 'containers/CreateIncidents.container';
import { IncidentsTypeProps } from 'components/Main/Incidents/interfaces';
import { TableCustom } from 'components/Main/Incidents/styles';
import { columns } from 'components/Main/Incidents/data';

const Incidents: FC<IncidentsTypeProps> = ({
    listOfIncidents,
    isListOfIncidentsLoading
}) => (
    <>
        <TableCustom
            pagination={{ position: ['bottomCenter'], defaultPageSize: 4 }}
            columns={columns}
            dataSource={listOfIncidents}
            bordered
            loading={isListOfIncidentsLoading}
        />
        <CreateIncidentsContainer />
    </>
);

export default Incidents;
