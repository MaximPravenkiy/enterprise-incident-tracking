import React, { FC, memo, useEffect, useState } from 'react';
import CreateIncidentsContainer from 'containers/CreateIncidents.container';
import { IncidentsTypeProps } from 'components/Main/Incidents/interfaces';
import { TableCustom } from 'components/Main/Incidents/styles';
import { columns } from 'components/Main/Incidents/data';

const Incidents: FC<IncidentsTypeProps> = memo(
    ({ listOfIncidents, isListOfIncidentsLoading }) => {
        const [dataNumberOnPage, setDataNumberOnPage] = useState(3);

        const handleResize = () => {
            if (window.innerHeight >= 665 && window.innerWidth >= 1024) {
                setDataNumberOnPage(4);
            } else if (window.innerWidth < 1024 && window.innerHeight < 665) {
                setDataNumberOnPage(5);
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
            <>
                <TableCustom
                    pagination={{
                        position: ['bottomCenter'],
                        pageSize: dataNumberOnPage
                    }}
                    columns={columns}
                    bordered
                    dataSource={listOfIncidents}
                    loading={isListOfIncidentsLoading}
                    scroll={{ x: true }}
                />
                <CreateIncidentsContainer />
            </>
        );
    }
);

export default Incidents;
