import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
// import { FormInstance } from 'antd/lib/form';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import PriorityLabel from "./PriorityLabel/PriorityLabel";
import { NavLink } from 'react-router-dom';
import {changeAssigneeUserId, getIncidents} from "../../../redux/store/actions/incidentsCreator";
import PriorityIcon from "../../../containers/PriorityIcon";

// const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const config = {
    rules: [
        { type: 'object' as const, required: true, message: 'Please select time!' }
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
        { label: 'Layout', value: 'Layout' },
        { label: 'Frontend', value: 'Frontend' },
        { label: 'Backend', value: 'Backend' },
        { label: 'System administration', value: 'System administration' },
        { label: 'Testing', value: 'Testing' },
    ];

    const priority = [
        { label: <PriorityLabel color='red' text='Blocker'/>, value: 'Blocker' },
        { label: <PriorityLabel color='orange' text='Critical'/>, value: 'Critical' },
        { label: <PriorityLabel color='yellow' text='Major'/>, value: 'Major' },
        { label: <PriorityLabel color='green' text='Normal'/>, value: 'Normal' },
        { label: <PriorityLabel color='grey' text='Minor'/>, value: 'Minor' },
    ];

    const status = [
        { label: 'Зарегистрирован', value: 'Зарегистрирован' },
        { label: 'Открыт', value: 'Открыт' },
        { label: 'В работе', value: 'В работе' },
        { label: 'Необходима доп. информация', value: 'Необходима доп. информация' },
        { label: 'Информация предоставлена', value: 'Информация предоставлена' },
        { label: 'Исправлено', value: 'Исправлено' },
        { label: 'Проверено', value: 'Проверено' },
        { label: 'Закрыто', value: 'Закрыто' },
        { label: 'Брак', value: 'Брак' },
        { label: 'Переоткрыто', value: 'Переоткрыто' },
    ];

    const {users, assigneeUserId} = useSelector(({incidentsReducer}: any) => incidentsReducer);
    const dispatch = useDispatch();

    const handleChange = () => {

    };

    ///// ЗАПРОСЫ

    /// Получить  user id

    const getUserId = (...args: any[]) => {
        dispatch(changeAssigneeUserId(args[1].id));
    };

    /// Получить инциденты при закрытии формы ///// ДУБЛИРОВАНИЕ

    const onCloseFormCreateIncident = async () => {
        try {
            // const userData = localStorage.getItem('userData');
            //
            // if (!userData) return;
            //
            // const token = JSON.parse(userData).token;
            // const response = await axios.get(
            //     '/incidents',
            // {headers: {Authorization: "Bearer " + token}}
            // );
            //
            // const listOfIncidents = response.data.map((incident: any) => ({
            //     icon: <PriorityIcon priority={incident.priority}/>,
            //     incidentName: incident.incidentName,
            //     description: incident.description,
            //     assignee: incident.assignee,
            //     area: incident.area,
            //     startDate: incident.startDate.split('T')[0],
            //     dueDate: incident.dueDate.split('T')[0],
            //     priority: incident.priority,
            //     status: incident.status
            // }));


        } catch (e) {
            console.log(e)
        }
    };

    //// Создать incident

    const onFinish = async (values: any) => {
        values.owner = assigneeUserId;
        try {
            const response = await axios.post('/incidents/create-incident', values);
            console.log(response.data.message)
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <Form
            {...layout}
            // ref={this.formRef}
            name="create-incident"
            onFinish={onFinish}
        >

            <NavLink to='/incidents'>
                <Button
                    type="primary"
                    shape="circle"
                    danger
                    onClick={() => dispatch(getIncidents())}
                >
                    X
                </Button>
            </NavLink>

            <Form.Item name="incidentName" label="Incident Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="assignee" label="Assignee">
                <Select options={users} onChange={getUserId} />
            </Form.Item>

            <Form.Item name="area" label="Area" rules={[{ required: true, message: 'Missing area' }]}>
                <Select options={areas} onChange={handleChange} />
            </Form.Item>

            <Form.Item name="startDate" label="Start date" {...config}>
                <DatePicker />
            </Form.Item>

            <Form.Item name="dueDate" label="Due Date" {...config}>
                <DatePicker />
            </Form.Item>

            <Form.Item name="description" label="Description" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="priority" label="Priority" rules={[{ required: true, message: 'Missing area' }]}>
                <Select options={priority} onChange={handleChange} />
            </Form.Item>

            <Form.Item name="status" label="Status" rules={[{ required: true, message: 'Missing area' }]}>
                <Select options={status} onChange={handleChange} />
            </Form.Item>

            <Form.Item {...tailLayout}>

                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Подтвердить
                </Button>

            </Form.Item>
        </Form>
    );
}

export default CreateIncidents;