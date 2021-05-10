import React, { FC, useEffect } from 'react';
import { Form, Input, Select, DatePicker, Modal } from 'antd';
import moment, { Moment } from 'moment';
import CloseModalButton from './CloseModalButton/CloseModalButton';
import TitleModal from './TitleModal/TitleModal';
import CreateOrUpdateButton from './CreateOrUpdateButton/CreateOrUpdateButton';
import { CreateIncidentProps } from './CreateIncidentForm.interfaces';
import {
    areas,
    configDate,
    layout,
    priority,
    tailLayout,
    status,
    configIncidentName,
    configDescription,
    configPriority,
    configStatus,
    configArea
} from './CreateIncidentForm.data';

const CreateIncidentForm: FC<CreateIncidentProps> = ({
    isModalVisible,
    users,
    actionWithCreateIncidentForm,
    valuesCreateIncidentForm,
    onChange,
    onFinish
}) => {
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({ ...valuesCreateIncidentForm });
    }, [form, valuesCreateIncidentForm]);

    const disabledDate = (currentDate: Moment) =>
        currentDate && currentDate < moment().startOf('day');

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
            >
                <Form.Item {...configIncidentName}>
                    <Input />
                </Form.Item>

                <Form.Item name="assignee" label="Assignee">
                    <Select options={users} />
                </Form.Item>

                <Form.Item {...configArea}>
                    <Select options={areas} />
                </Form.Item>

                <Form.Item name="startDate" label="Start date" {...configDate}>
                    <DatePicker disabled />
                </Form.Item>

                <Form.Item name="dueDate" label="Due Date" {...configDate}>
                    <DatePicker disabledDate={disabledDate} />
                </Form.Item>

                <Form.Item {...configDescription}>
                    <Input />
                </Form.Item>

                <Form.Item {...configPriority}>
                    <Select options={priority} />
                </Form.Item>

                <Form.Item {...configStatus}>
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

export default CreateIncidentForm;
