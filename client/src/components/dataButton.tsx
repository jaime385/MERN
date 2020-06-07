import React, { useState } from 'react';

const DataButton = () => {
  const [name, setName] = useState('Jaime');
  const [lastName, setLastname] = useState('Brenes');

  const handleChange = (date: any) => {
    setName('Mario');
    setLastname('Rojas');
  };
  const handleSelect = (date: any) => {
    console.log('Jaime');
  };

  return (
    <div>
      <button onClick={handleChange}>Change</button>
      <button onClick={handleSelect}>Select</button>
      <h2>
        Hello {name}
        {lastName}
      </h2>
    </div>
  );
};

export default DataButton;
