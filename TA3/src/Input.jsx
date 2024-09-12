import React, { useState } from 'react';

export function Input() {
  const [inputValue, setInputValue] = useState('');

  const updateText = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Escribir..." onChange={updateText}/>
      <p>Texto ingresado: {inputValue}</p>
    </div>
  );
}
