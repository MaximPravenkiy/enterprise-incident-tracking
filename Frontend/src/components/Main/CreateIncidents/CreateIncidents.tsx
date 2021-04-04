import React, { useEffect, useRef } from 'react';
import { Form, Input, Select, DatePicker, Modal } from 'antd';
import moment from 'moment';
import CloseModalButton from './CloseModalButton/CloseModalButton';
import TitleModal from './TitleModal/TitleModal';
import CreateOrUpdateButton from './CreateOrUpdateButton/CreateOrUpdateButton';
import {
    ActionWithCreateIncidentFormType,
    CreateIncidentTypes,
    UsersTypes,
    ValuesCreateIncidentFormTypes
} from '../../../redux/store/reducers/incidentsReducer';
import PriorityLabel from './PriorityLabel/PriorityLabel';

type CreateIncidentTypeProps = {
    users: Array<UsersTypes>;
    isModalVisible: boolean;
    valuesCreateIncidentForm: ValuesCreateIncidentFormTypes;
    actionWithCreateIncidentForm: ActionWithCreateIncidentFormType;
    getUserId: (value: string) => void;
    onFinish: (value: CreateIncidentTypes) => void;
    onChange: (value: ValuesCreateIncidentFormTypes) => void;
};

// For selections
const areas = [
    { label: 'Layout', value: 'Layout' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'DevOps', value: 'DevOps' },
    { label: 'Testing', value: 'Testing' }
];

const priority = [
    { label: <PriorityLabel color="red" text="Blocker" />, value: 'Blocker' },
    {
        label: <PriorityLabel color="orange" text="Critical" />,
        value: 'Critical'
    },
    { label: <PriorityLabel color="yellow" text="Major" />, value: 'Major' },
    { label: <PriorityLabel color="green" text="Normal" />, value: 'Normal' },
    { label: <PriorityLabel color="grey" text="Minor" />, value: 'Minor' }
];

const status = [
    { label: 'Зарегистрирован', value: 'Зарегистрирован' },
    { label: 'Открыт', value: 'Открыт' },
    { label: 'В работе', value: 'В работе' },
    {
        label: 'Необходима доп. информация',
        value: 'Необходима доп. информация'
    },
    { label: 'Информация предоставлена', value: 'Информация предоставлена' },
    { label: 'Исправлено', value: 'Исправлено' },
    { label: 'Проверено', value: 'Проверено' },
    { label: 'Закрыто', value: 'Закрыто' },
    { label: 'Брак', value: 'Брак' },
    { label: 'Переоткрыто', value: 'Переоткрыто' }
];

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};

const config = {
    rules: [
        {
            type: 'object' as const,
            required: true,
            message: 'Please select a date!'
        }
    ]
};

const CreateIncidents: React.FC<CreateIncidentTypeProps> = ({
    isModalVisible,
    users,
    actionWithCreateIncidentForm,
    valuesCreateIncidentForm,
    onChange,
    onFinish,
    getUserId
}) => {
    // Костыль для ворнинга
    const formRef = useRef(null);
    const [form] = Form.useForm();

    useEffect(() => {
        if (formRef.current) {
            form.setFieldsValue({ ...valuesCreateIncidentForm });
        }
    }, [form, valuesCreateIncidentForm]);

    function disabledDate(currentDate: moment.Moment) {
        return currentDate && currentDate < moment().startOf('day');
    }

    return (
        <Modal
            footer={null}
            centered
            title={<TitleModal />}
            visible={isModalVisible}
            closeIcon={<CloseModalButton />}
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
                <Form.Item
                    name="incidentName"
                    label="Incident Name"
                    rules={[
                        {
                            required: true,
                            message: "Incident name can't be empty!"
                        },
                        {
                            max: 15,
                            message:
                                "Incident name can't contain more than 15 symbols!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item name="assignee" label="Assignee">
                    <Select options={users} onChange={getUserId} />
                </Form.Item>

                <Form.Item
                    name="area"
                    label="Area"
                    rules={[
                        { required: true, message: 'Area is missing area' }
                    ]}
                >
                    <Select options={areas} />
                </Form.Item>

                <Form.Item name="startDate" label="Start date" {...config}>
                    <DatePicker disabled />
                </Form.Item>

                <Form.Item name="dueDate" label="Due Date" {...config}>
                    <DatePicker disabledDate={disabledDate} />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[
                        {
                            required: true,
                            message: "Description can't be empty!"
                        },
                        {
                            max: 35,
                            message:
                                "Incident name can't contain more than 35 symbols!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="priority"
                    label="Priority"
                    rules={[
                        { required: true, message: 'Priority is missing area' }
                    ]}
                >
                    <Select options={priority} />
                </Form.Item>

                <Form.Item
                    name="status"
                    label="Status"
                    rules={[
                        { required: true, message: 'Status is missing area' }
                    ]}
                >
                    <Select options={status} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <CreateOrUpdateButton
                        actionWithCreateIncidentForm={
                            actionWithCreateIncidentForm
                        }
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateIncidents;
