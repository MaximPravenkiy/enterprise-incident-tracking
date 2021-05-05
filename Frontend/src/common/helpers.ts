import moment, { Moment } from 'moment';

export const getDate = (date = new Date() as Date | Moment | string): Moment =>
    moment(date, 'YYYY-MM-DD').utc(true);
