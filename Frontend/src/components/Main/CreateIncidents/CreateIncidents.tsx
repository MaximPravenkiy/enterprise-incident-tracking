import React from 'react';
import {Form, Input, Button, Select, DatePicker} from 'antd';
import {Modal} from 'antd';
import CloseModalButton from "./CloseModalButton/CloseModalButton";
import TitleModal from "./TitleModal/TitleModal";
import {CreateIncidentProps} from "../../../containers/CreateIncidentsContainer";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const config = {
    rules: [
        {type: 'object' as const, required: true, message: 'Please select time!'}
    ],
};

const CreateIncidents = (
    {
        areas,
        priority,
        status,
        isModalVisible,
        onFinish,
        users,
        getUserId
    }
    : CreateIncidentProps) => {
    return (
        <Modal
            footer={null}
            centered
            title={<TitleModal/>}
            visible={isModalVisible}
            closeIcon={<CloseModalButton/>}
            okText='Создать инцидент'
        >

            <Form
                {...layout}
                name="create-incident"
                onFinish={onFinish}
            >

                <Form.Item name="incidentName" label="Incident Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name="assignee" label="Assignee">
                    <Select options={users} onChange={getUserId}/>
                </Form.Item>

                <Form.Item name="area" label="Area" rules={[{required: true, message: 'Missing area'}]}>
                    <Select options={areas}/>
                </Form.Item>

                <Form.Item name="startDate" label="Start date" {...config}>
                    <DatePicker/>
                </Form.Item>

                <Form.Item name="dueDate" label="Due Date" {...config}>
                    <DatePicker/>
                </Form.Item>

                <Form.Item name="description" label="Description" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name="priority" label="Priority" rules={[{required: true, message: 'Missing area'}]}>
                    <Select options={priority}/>
                </Form.Item>

                <Form.Item name="status" label="Status" rules={[{required: true, message: 'Missing area'}]}>
                    <Select options={status}/>
                </Form.Item>

                <Form.Item {...tailLayout}>

                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Создать инцидент
                    </Button>

                </Form.Item>
            </Form>

        </Modal>
    );
}

export default CreateIncidents;