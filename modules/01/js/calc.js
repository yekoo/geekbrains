
//console.log("calc loaded");
import {DateTime} from 'https://moment.github.io/luxon/es6/luxon.js';
// import {DateTime} from './js/luxon.js';

export const diffDates = (date1, date2)=>{
    const iso1 = DateTime.fromISO(date1);
    const iso2 = DateTime.fromISO(date2);
    return iso2.diff(iso1, ['years','months','days']).toObject();
}

export const diffTimes = (date1, date2)=>{
    const iso1 = DateTime.fromISO(date1);
    const iso2 = DateTime.fromISO(date2);
    return iso2.diff(iso1, ['minutes','seconds','milliseconds']).toObject();
}
