import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    console.log('Hello! This is a static message from the button.');
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  const handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert('I was clicked');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>{' '}
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome('Welcome')}>
        Say Welcome
      </button>

      <hr />

      <button onClick={handleSyntheticEvent}>OnPress</button>
    </div>
  );
};

export default Counter;
