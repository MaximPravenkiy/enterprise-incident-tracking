import moment, { Moment } from 'moment';

export const getDate = (date = new Date() as Date | Moment): Moment =>
    moment(date, 'YYYY-MM-DD').utc(true);
