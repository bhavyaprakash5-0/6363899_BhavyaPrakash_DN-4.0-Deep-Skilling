import React, { useState } from 'react';
import './ComplaintRegister.css';

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionId = Math.floor(Math.random() * 1000) + 1;
    alert(`Thanks ${name}\nYour Complaint was Submitted.\nTransaction ID is: ${transactionId}`);
    setName('');
    setComplaint('');
  };

  return (
    <div className="container">
      <h2>Register your complaints here!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Complaint: </label>
          <textarea
            value={complaint}
            required
            onChange={(e) => setComplaint(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
