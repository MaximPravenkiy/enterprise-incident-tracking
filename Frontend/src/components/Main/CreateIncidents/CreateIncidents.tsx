import React from 'react';
import {Form, Input, Button, Select, DatePicker} from 'antd';
// import { FormInstance } from 'antd/lib/form';
import {useDispatch, useSelector} from "react-redux";
import PriorityLabel from "./PriorityLabel/PriorityLabel";
import {changeAssigneeUserId, createIncident, getIncidents} from "../../../redux/store/actions/incidentsCreator";
import {Modal} from 'antd';
import CloseModalButton from "./CloseModalButton/CloseModalButton";

// const { Option } = Select;

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

const CreateIncidents = () => {

    // const onGenderChange = (value: string) => {
    // switch (value) {
    //     case 'male':
    //         this.formRef.current!.setFieldsValue({ note: 'Hi, man!' });
    //         return;
    //     case 'female':
    //         this.formRef.current!.setFieldsValue({ note: 'Hi, lady!' });
    //         return;
    //     case 'other':
    //         this.formRef.current!.setFieldsValue({ note: 'Hi there!' });
    // }
    // };


    // const onReset = () => {
    // formRef.current!.resetFields();
    // };

    // const onFill = () => {
    // this.formRef.current!.setFieldsValue({
    //     note: 'Hello world!',
    //     gender: 'male',
    // });
    // };

    //// ДЛЯ СЕЛЕКШОНОВ

    const areas = [
        {label: 'Layout', value: 'Layout'},
        {label: 'Frontend', value: 'Frontend'},
        {label: 'Backend', value: 'Backend'},
        {label: 'System administration', value: 'System administration'},
        {label: 'Testing', value: 'Testing'},
    ];

    const priority = [
        {label: <PriorityLabel color='red' text='Blocker'/>, value: 'Blocker'},
        {label: <PriorityLabel color='orange' text='Critical'/>, value: 'Critical'},
        {label: <PriorityLabel color='yellow' text='Major'/>, value: 'Major'},
        {label: <PriorityLabel color='green' text='Normal'/>, value: 'Normal'},
        {label: <PriorityLabel color='grey' text='Minor'/>, value: 'Minor'},
    ];

    const status = [
        {label: 'Зарегистрирован', value: 'Зарегистрирован'},
        {label: 'Открыт', value: 'Открыт'},
        {label: 'В работе', value: 'В работе'},
        {label: 'Необходима доп. информация', value: 'Необходима доп. информация'},
        {label: 'Информация предоставлена', value: 'Информация предоставлена'},
        {label: 'Исправлено', value: 'Исправлено'},
        {label: 'Проверено', value: 'Проверено'},
        {label: 'Закрыто', value: 'Закрыто'},
        {label: 'Брак', value: 'Брак'},
        {label: 'Переоткрыто', value: 'Переоткрыто'},
    ];

    const {users, assigneeUserId, isModalVisible} = useSelector(({incidentsReducer}: any) => incidentsReducer);
    const dispatch = useDispatch();

    const handleChange = () => {

    };

    /// Получить  user id

    const getUserId = (...args: any[]) => {
        dispatch(changeAssigneeUserId(args[1].id));
    };

    //// Создать incident

    const onFinish = (values: any) => {
        values.owner = assigneeUserId;
        dispatch(createIncident(values));
        dispatch(getIncidents());
    };

    return (

        <Modal
            footer={null}
            centered
            title="Список инцидентов"
            visible={isModalVisible}
            closeIcon={<CloseModalButton/>}
            okText='Создать инцидент'
        >

            <Form
                {...layout}
                // ref={this.formRef}
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
                    <Select options={areas} onChange={handleChange}/>
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
                    <Select options={priority} onChange={handleChange}/>
                </Form.Item>

                <Form.Item name="status" label="Status" rules={[{required: true, message: 'Missing area'}]}>
                    <Select options={status} onChange={handleChange}/>
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