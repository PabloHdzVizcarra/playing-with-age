import moment from 'moment';

export const getData = (date1, date2) => {


  const now = moment();
  
  const dateOne = moment(date1);
  const dateTwo = moment(date2);

  const days1 = (now.diff(dateOne, 'days'));
  const days2 = (now.diff(dateTwo, 'days'));

  const months1 = (now.diff(dateOne, 'months'));
  const months2 = (now.diff(dateTwo, 'months'));

  const years1 = (now.diff(dateOne, 'years'));
  const years2 = (now.diff(dateTwo, 'years'));

  console.log(dateOne.format().slice(0, 4));
  console.log(dateTwo.format().slice(0, 4));

  if (dateOne.format().slice(0, 4) < dateTwo.format().slice(0, 4)) {
    console.log('el primero es mayor');
  }

  const differenceDays = (dateTwo.diff(dateOne, 'years', true));

  // console.log(day2.diff(day1, 'days'));
  // console.log(day2.diff(day1, 'month'));
  // console.log(day2.diff(day1, 'years', true));
  // console.log(day2.diff(day1, 'hours'));
  // console.log(day2.diff(day1, 'minutes'));

  // console.log(moment(date1).valueOf());
  // console.log(moment(date2).valueOf());
  // console.log(moment(1595211680032).format());

  // let d1 = moment('2018-06-12');
  // let d2 = moment('2018-06-28');

  // let days = d2.diff(d1, 'days');
  // console.log(`Difference in days: ${days}`);

  return {
    data1: {
      days: days1,
      months: months1,
      years: years1,
    },
    data2: {
      days: days2,
      months: months2,
      years: years2
    },
    dataDifference: {

    }
  }
}