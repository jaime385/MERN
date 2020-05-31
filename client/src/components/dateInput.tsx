import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: any) => {
    setStartDate(date);
  };
  const handleSelect = (date: any) => {
    const words = JSON.stringify(date);
    console.log(words);
    //string.substr(start, length)
    const year = words.substr(1, 4);
    const month = words.substr(6, 2);
    const day = words.substr(9, 2);

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${year}-${month}-${day}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data, date, typeof date);
      })
      .catch(console.log);
  };

  return (
    <Datepicker
      selected={startDate}
      onChange={handleChange}
      onSelect={handleSelect}
    />
  );
};

export default Calendar;
