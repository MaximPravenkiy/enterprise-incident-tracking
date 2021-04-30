import { Moment } from 'moment';

export interface ValuesRegistrationForm {
    dateOfBirth: null | Moment;
    fullname: string;
    login: string;
    password: string;
    position: string;
}
