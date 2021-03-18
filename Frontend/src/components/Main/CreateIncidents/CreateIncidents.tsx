import React from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import { FormInstance } from 'antd/lib/form';

const { Option } = Select;

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

    const onGenderChange = (value: string) => {
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
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        // formRef.current!.resetFields();
    };

    const onFill = () => {
        // this.formRef.current!.setFieldsValue({
        //     note: 'Hello world!',
        //     gender: 'male',
        // });
    };

    //// ДЛЯ СЕЛЕКШОНОВ

    const areas = [
        { label: 'Layout', value: 'Layout' },
        { label: 'Frontend', value: 'Frontend' },
        { label: 'Backend', value: 'Backend' },
        { label: 'System administration', value: 'System administration' },
        { label: 'Testing', value: 'Testing' },
    ];

    const priority = [
        { label: 'Blocker', value: 'Blocker' },
        { label: 'Critical', value: 'Critical' },
        { label: 'Major', value: 'Major' },
        { label: 'Normal', value: 'Normal' },
        { label: 'Minor', value: 'Minor' },
    ];

    const status = [
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

    const handleChange = () => {
        // form.setFieldsValue({ sights: [] });
    };

    return (
        <Form
            {...layout}
            // ref={this.formRef}
            name="create-incident"
            onFinish={onFinish}
        >

            <Form.Item name="incident-name" label="Incident Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>

            <Form.Item name="assignee" label="Assignee">
                <Input />
            </Form.Item>

            <Form.Item name="area" label="Area" rules={[{ required: true, message: 'Missing area' }]}>
                <Select options={areas} onChange={handleChange} />
            </Form.Item>

            <Form.Item name="start-date" label="Start date" {...config}>
                <DatePicker />
            </Form.Item>

            <Form.Item name="due-date" label="Due Date" {...config}>
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

                <Button type="primary" htmlType="submit">
                    Подтвердить
                </Button>

                {/*<Button htmlType="button" onClick={onReset}>*/}
                {/*    Очистить*/}
                {/*</Button>*/}

            </Form.Item>
        </Form>
    );
}

export default CreateIncidents;