import {
    CreateIncident,
    User,
    ValuesCreateIncidentsForm
} from 'common/types/incidents';

interface CreateIncidentProps {
    users: User[];
    isModalVisible: boolean;
    actionWithIncidentForm: ActionWithIncidentForm;
    valuesIncidentForm: ValuesCreateIncidentsForm;
    onFinish: (value: CreateIncident) => void;
    onChange?: (value: ValuesCreateIncidentsForm) => void;
}

type ActionWithIncidentForm = 'Создать' | 'Обновить';

export type { CreateIncidentProps, ActionWithIncidentForm };
