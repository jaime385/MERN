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
    console.log(year, month, day);
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=bGWc0YWQGd5QM3f5HEYlddNpl06U7hIhaI0jRD0E&date=${year}-${month}-${day}`
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        let elemento = document.getElementsByClassName('viewer');
        var x: any = document.getElementsByTagName('div').namedItem('viewer')
          ?.style;
        const newBgColor: any = 'rgb(255,255,200)';
        const backgroundUrl =
          "url('https://apod.nasa.gov/apod/image/1812/NGC1365_HaLRGBpugh1024.jpg')";
        x.setProperty('background-image', backgroundUrl);
        /*for (var i in elemento) {
          console.log(i, x);
        }*/
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
