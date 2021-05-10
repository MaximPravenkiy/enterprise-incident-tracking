import React, { FC, memo, useEffect, useState } from 'react';
import { Table } from 'antd';
import CreateIncidentFormContainer from '../Forms/CreateIncident/CreateIncidentForm.container';
import { IncidentsProps } from './Incidents.interfaces';
import { columns } from './Incidents.data';
import { TableWrapper } from './Incidents.styles';

const Incidents: FC<IncidentsProps> = memo(
    ({ listOfIncidents, isListOfIncidentsLoading }) => {
        const [dataNumberOnPage, setDataNumberOnPage] = useState(3);

        const handleResize = () => {
            if (window.innerHeight >= 665 && window.innerWidth >= 1024) {
                setDataNumberOnPage(5);
            } else if (window.innerWidth < 1024 && window.innerHeight < 665) {
                setDataNumberOnPage(4);
            } else {
                setDataNumberOnPage(6);
            }
        };

        useEffect(() => {
            handleResize();

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
            <TableWrapper>
                <Table
                    pagination={{
                        position: ['bottomCenter'],
                        pageSize: dataNumberOnPage
                    }}
                    columns={columns}
                    bordered
                    dataSource={listOfIncidents}
                    loading={isListOfIncidentsLoading}
                    scroll={{ x: 1200 }}
                />
                <CreateIncidentFormContainer />
            </TableWrapper>
        );
    }
);

export default Incidents;
