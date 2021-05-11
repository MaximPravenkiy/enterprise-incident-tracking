import React from 'react';
import PriorityLabel from './PriorityLabel/PriorityLabel';

export const areas = [
    { label: 'Designer', value: 'Designer' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'DevOps', value: 'DevOps' },
    { label: 'Testing', value: 'Testing' }
];

export const priority = [
    { label: <PriorityLabel color="red" text="Blocker" />, value: 'Blocker' },
    {
        label: <PriorityLabel color="orange" text="Critical" />,
        value: 'Critical'
    },
    { label: <PriorityLabel color="yellow" text="Major" />, value: 'Major' },
    { label: <PriorityLabel color="green" text="Normal" />, value: 'Normal' },
    { label: <PriorityLabel color="grey" text="Minor" />, value: 'Minor' }
];

export const status = [
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

export const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

export const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
};

export const configIncidentName = {
    name: 'incidentName',
    label: 'Incident Name',
    rules: [
        {
            required: true,
            message: "Incident name can't be empty!"
        },
        {
            max: 30,
            message: "Incident name can't contain more than 30 symbols!"
        }
    ]
};

export const configArea = {
    name: 'area',
    label: 'Area',
    rules: [{ required: true, message: 'Area is missing area' }]
};

export const configDate = {
    rules: [
        {
            type: 'object' as const,
            required: true,
            message: 'Please select a date!'
        }
    ]
};

export const configDescription = {
    name: 'description',
    label: 'Description',
    rules: [
        {
            required: true,
            message: "Description can't be empty!"
        }
    ]
};

export const configPriority = {
    name: 'priority',
    label: 'Priority',
    rules: [{ required: true, message: 'Priority is missing area' }]
};

export const configStatus = {
    name: 'status',
    label: 'Status',
    rules: [{ required: true, message: 'Status is missing area' }]
};
