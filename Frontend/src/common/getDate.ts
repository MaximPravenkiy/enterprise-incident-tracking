import moment from 'moment';

export function getDate(
    date = new Date() as Date | moment.Moment
): moment.Moment {
    return moment(date, 'YYYY-MM-DD').utc(true);
}
