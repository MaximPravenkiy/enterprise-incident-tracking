import React, { FC, memo, useEffect } from 'react';
import { Form, Input, Select, DatePicker, Modal } from 'antd';
import CloseModalButton from './close-modal-button/close-modal-button.component';
import TitleModal from './title-modal/title-modal.component';
import ConfirmButton from './confirm-button/confirm-button.component';
import { CreateIncidentProps } from './incident-form.interfaces';
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
    configArea,
    disabledDate
} from './incident-form.data';

const IncidentForm: FC<CreateIncidentProps> = memo(
    ({
        isModalVisible,
        users,
        valuesIncidentForm,
        onChange,
        onFinish,
        actionWithIncidentForm
    }) => {
        const [form] = Form.useForm();

        useEffect(() => {
            form.setFieldsValue({ ...valuesIncidentForm });
        }, [form, valuesIncidentForm]);

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
                    initialValues={valuesIncidentForm}
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

                    <Form.Item
                        name="startDate"
                        label="Start date"
                        {...configDate}
                    >
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
                        <ConfirmButton
                            actionWithIncidentForm={actionWithIncidentForm}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
);

export default IncidentForm;
