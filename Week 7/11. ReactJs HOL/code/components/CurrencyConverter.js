import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  const handleSubmit = () => {

    const conversionRate = 90;
    const result = parseFloat(rupees) / conversionRate;

    if (!isNaN(result)) {
      setEuros(result.toFixed(2));
    } else {
      setEuros('Invalid input');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>💱 Currency Converter (INR → Euro)</h2>
      <input
        type="text"
        placeholder="Enter amount in ₹"
        value={rupees}
        onChange={handleChange}
      />{' '}
      <button onClick={handleSubmit}>Convert</button>

      {euros && <p>€ {euros}</p>}
    </div>
  );
};

export default CurrencyConverter;
