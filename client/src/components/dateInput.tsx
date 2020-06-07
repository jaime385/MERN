import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  //const [copy, setCopyright] = useState('Copyright: ');

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
        const backgroundImage = data.url;
        console.log(data);

        var image: any = document
          .getElementsByTagName('div')
          .namedItem('viewer')?.style;
        const backgroundUrl = `url('${backgroundImage}')`;
        image.setProperty('background-image', backgroundUrl);
        //Showing picture's author.
        const nameCopyright: HTMLElement = document.getElementById(
          'infoCopy'
        ) as HTMLElement;
        nameCopyright.innerHTML = `Copyright: ${data.copyright}`;
        //Showing picture's info.
        const picturesInfo: HTMLElement = document.getElementById(
          'explanation'
        ) as HTMLElement;
        picturesInfo.innerHTML = `${data.explanation}`;
        //Showing picture's name.
        const picturesName: HTMLElement = document.getElementById(
          'title'
        ) as HTMLElement;
        picturesName.innerHTML = `${data.title}`;
      })
      .catch(console.error);
  };

  return (
    <div className="dataFrame">
      <div>
        <h1 id="title"></h1>
        <br></br>
        <p id="explanation"></p>
      </div>
      <div className="calendarInput">
        <h1 className="apodExplorerTitle">APOD Explorer</h1>
        <label className="apodExplorerTitle">Select a date: </label>
        <Datepicker
          selected={startDate}
          onChange={handleChange}
          onSelect={handleSelect}
        />
      </div>
      <div className="copyrightLocation">
        <h2 className="info" id="infoCopy"></h2>
      </div>
    </div>
  );
};

export default Calendar;

//let elemento = document.getElementsByClassName('viewer');
/*for (var i in elemento) {
          console.log(i, x);
  }*/
