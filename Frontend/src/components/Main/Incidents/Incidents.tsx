import { List, Button } from 'antd';
import { Row, Col } from 'antd';
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
    const { initLoading, loading, list } = useSelector(({incidentsReducer}: any) => incidentsReducer);
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
                <Button onClick={ () => {} }>loading more</Button>
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
                        <Row>

                            <Col flex={1}>
                                <WarningOutlined style={{ color: 'red' }} />
                            </Col>
                            <Col flex={7}>Название инцидента</Col>
                            <Col flex={7}>Описание инцидента</Col>
                            <Col flex={3}>Assignee Assignee</Col>
                            <Col flex={3}>Area (откуда)</Col>
                            <Col flex={2}>Start Date</Col>
                            <Col flex={2}>Due Date</Col>
                            <Col flex={2}>Priority</Col>
                            <Col flex={2}>Status</Col>
                        </Row>
                    </Item>
                )}
            />
        </>
    );
}

export default Incidents;