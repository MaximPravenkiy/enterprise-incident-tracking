import moment from 'moment';

export interface IValuesRegistrationForm {
    dateOfBirth: null | moment.Moment;
    fullname: string;
    login: string;
    password: string;
    position: string;
}