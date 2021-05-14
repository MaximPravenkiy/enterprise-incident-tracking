import React, { memo, useCallback } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { closeModal } from 'redux/actions/incidents/incidents.actions';
import { IncidentsActions } from 'redux/actions/incidents/incidents.interfaces';

const CloseModalButton = memo(() => {
    const dispatch = useDispatch<Dispatch<IncidentsActions>>();

    const onCloseModal = useCallback(() => {
        dispatch(closeModal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Button type="primary" shape="circle" danger onClick={onCloseModal}>
            X
        </Button>
    );
});

export default CloseModalButton;
