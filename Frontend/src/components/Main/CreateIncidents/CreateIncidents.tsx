import React, {useEffect, useRef} from 'react';
import {Form, Input, Button, Select, DatePicker} from 'antd';
import {Modal} from 'antd';
import CloseModalButton from "./CloseModalButton/CloseModalButton";
import TitleModal from "./TitleModal/TitleModal";
import {CreateIncidentProps} from "../../../containers/CreateIncidentsContainer";
import moment from 'moment';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const config = {
    rules: [
        {type: 'object' as const, required: true, message: 'Please select a date!'}
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
        getUserId,
        valuesCreateIncidentForm,
        onChange
    }
    : CreateIncidentProps) => {

    // Костыль для ворнинга
    const formRef = useRef(null);
    const [form] = Form.useForm();

    useEffect(() => {
        if (formRef.current) {
            form.setFieldsValue({...valuesCreateIncidentForm})
        }
    }, [form, valuesCreateIncidentForm]);

    function disabledDate(currentDate: any) {
        return currentDate && currentDate < moment().startOf('day');
    }
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
                form={form}
                initialValues={valuesCreateIncidentForm}
                onValuesChange={onChange}
                ref={formRef}
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
                    <DatePicker disabled/>
                </Form.Item>

                <Form.Item name="dueDate" label="Due Date" {...config}>
                    <DatePicker disabledDate={disabledDate}/>
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