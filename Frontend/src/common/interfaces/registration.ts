import moment from 'moment';

export interface ValuesRegistrationForm {
    dateOfBirth: null | moment.Moment;
    fullname: string;
    login: string;
    password: string;
    position: string;
}
