import moment from 'moment';

export const getData = (date1, date2, name1, name2) => {

  const now = moment();

  
  const dateOne = moment(date1);
  const dateTwo = moment(date2);

  const days1 = (now.diff(dateOne, 'days'));
  const days2 = (now.diff(dateTwo, 'days'));

  const months1 = (now.diff(dateOne, 'months'));
  const months2 = (now.diff(dateTwo, 'months'));

  const years1 = (now.diff(dateOne, 'years'));
  const years2 = (now.diff(dateTwo, 'years'));

  const hours1 = (now.diff(dateOne, 'hours'));
  const hours2 = (now.diff(dateTwo, 'hours'));

  const minutes1 = (now.diff(dateOne, 'minutes'));
  const minutes2 = (now.diff(dateTwo, 'minutes'));

  if (dateOne.format().slice(0, 4) < dateTwo.format().slice(0, 4)) {
    
    const differenceDays = (dateTwo.diff(dateOne, 'days'));
    const differenceMonths = (dateTwo.diff(dateOne, 'months'));
    const differenceYears = (dateTwo.diff(dateOne, 'years', true)).toFixed(1);
    const differenceHours = (dateTwo.diff(dateOne, 'hours'));
    const differenceMinutes = (dateTwo.diff(dateOne, 'minutes'));

    return {
      data1: {
        days: days1,
        months: months1,
        years: years1,
        hours: hours1,
        minutes: minutes1,
        name: name1
      },
      data2: {
        days: days2,
        months: months2,
        years: years2,
        hours: hours2,
        minutes: minutes2,
        name: name2
      },
      dataDifference: {
        differenceMinutes,
        differenceHours,
        differenceDays,
        differenceMonths,
        differenceYears,
      }
    }


  } else {

    const differenceDays = (dateOne.diff(dateTwo, 'days'));
    const differenceMonths = (dateOne.diff(dateTwo, 'months'));
    const differenceYears = (dateOne.diff(dateTwo, 'years', true)).toFixed(2);
    const differenceHours = (dateOne.diff(dateTwo, 'hours'));
    const differenceMinutes = (dateOne.diff(dateTwo, 'minutes'));

    return {
      data1: {
        days: days1,
        months: months1,
        years: years1,
        name: name1,
        hours: hours1,
        minutes: minutes1,
      },
      data2: {
        days: days2,
        months: months2,
        years: years2,
        name: name2,
        hours: hours2,
        minutes: minutes2,
      },
      dataDifference: {
        differenceMinutes,
        differenceHours,
        differenceDays,
        differenceMonths,
        differenceYears,
      }
    }


  }

  
}