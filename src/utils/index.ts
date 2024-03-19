import {useCallback} from 'react';

export const getTransformedDate = (date: Date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${year}/${month >= 10 ? month : '0' + month}/${
    day >= 10 ? day : '0' + day
  }`;
};

export const getCurrentDateItems = () => {
  const currentDate = getTransformedDate(new Date());
  const currentYear = currentDate.slice(0, 4);
  const currentMonth = currentDate.slice(5, 7);
  const currentDay = currentDate.slice(8, 10);
  const currentMonthKey = currentDate.slice(0, 7);

  return {
    currentDate,
    currentYear,
    currentMonth,
    currentDay,
    currentMonthKey,
  };
};
