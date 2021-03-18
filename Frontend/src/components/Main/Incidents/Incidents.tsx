import {List, Button} from 'antd';
import React from 'react';
import {WarningOutlined} from "@ant-design/icons/lib";
import {useSelector} from "react-redux";
import styled from 'styled-components';
import IncidentsHeader from "./IncidentsHeader/IncidentsHeader";

const ListEx = styled(List)`
    width: 95%;
    border: 2px solid;
    padding: 15px 20px;
`

const Item = styled(List.Item)`
    && {
        border-bottom: 1px solid;
    }
`

const Incidents = () => {
    const {initLoading, loading, list} = useSelector(({incidentsReducer}: any) => incidentsReducer);
    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={() => {
                }}>loading more</Button>
            </div>
        ) : null;

    return (
        <>
            <ListEx
                header={<IncidentsHeader/>}
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={() => (
                    <Item
                        actions={[
                            <a href="#top" key="list-loadmore-edit">Edit</a>,
                            <a href="#top" key="list-loadmore-more">Delete</a>
                        ]}
                    >
                        <div>
                            <WarningOutlined style={{color: 'red'}}/>
                        </div>
                        <div>Название инцидента</div>
                        <div>Описание инцидента</div>
                        <div>Assignee Assignee</div>
                        <div>Area (откуда)</div>
                        <div>Start Date</div>
                        <div>Due Date</div>
                        <div>Priority</div>
                        <div>Status</div>
                    </Item>
                )}
            />
        </>
    );
}

export default Incidents;