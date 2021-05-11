import React, {
    FC,
    memo,
    useCallback,
    useEffect,
    useMemo,
    useState
} from 'react';
import { Table, TablePaginationConfig } from 'antd';
import { useDebouncedCallback } from 'use-debounce';
import CreateIncidentFormContainer from '../Forms/Incident/CreateIncidentForm.container';
import { IncidentsProps } from './Incidents.interfaces';
import { columns, scrollSettings } from './Incidents.data';
import { TableWrapper } from './Incidents.styles';
import EditIncidentFormContainer from '../Forms/Incident/EditIncidentForm.container';

const Incidents: FC<IncidentsProps> = memo(
    ({ listOfIncidents, isListOfIncidentsLoading }) => {
        const [dataNumberOnPage, setDataNumberOnPage] = useState(3);

        const handleResize = useCallback(() => {
            if (window.innerHeight >= 665 && window.innerWidth >= 1024) {
                setDataNumberOnPage(5);
            } else if (window.innerWidth < 1024 && window.innerHeight < 665) {
                setDataNumberOnPage(4);
            } else {
                setDataNumberOnPage(6);
            }
        }, []);
        const debouncedHandleResize = useDebouncedCallback(handleResize, 200);

        const paginationConfig = useMemo(
            () =>
                ({
                    position: ['bottomCenter'],
                    pageSize: dataNumberOnPage
                } as TablePaginationConfig),
            [dataNumberOnPage]
        );

        useEffect(() => {
            debouncedHandleResize();
            window.addEventListener('resize', debouncedHandleResize);
            return () =>
                window.removeEventListener('resize', debouncedHandleResize);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <TableWrapper>
                <Table
                    pagination={paginationConfig}
                    columns={columns}
                    bordered
                    dataSource={listOfIncidents}
                    loading={isListOfIncidentsLoading}
                    scroll={scrollSettings}
                />
                <CreateIncidentFormContainer />
                <EditIncidentFormContainer />
            </TableWrapper>
        );
    }
);

export default Incidents;
