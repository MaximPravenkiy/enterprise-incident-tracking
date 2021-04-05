import moment from 'moment';

export const getDate = (
    date = new Date() as Date | moment.Moment
): moment.Moment => moment(date, 'YYYY-MM-DD').utc(true);
