import React from 'react';
import FlightList from './FlightList';

const UserPage = () => {
  const handleBook = () => {
    alert('Ticket booked successfully!');
  };

  return (
    <div>
      <h2>Welcome, User!</h2>
      <FlightList />
      <button style={{ marginTop: '10px' }} onClick={handleBook}>
        Book Ticket
      </button>
    </div>
  );
};

export default UserPage;
