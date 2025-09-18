import React from 'react';

const flights = [
  { id: 1, flight: 'AI-202', from: 'Delhi', to: 'Mumbai', time: '10:00 AM' },
  { id: 2, flight: 'AI-203', from: 'Kolkata', to: 'Bangalore', time: '12:30 PM' },
  { id: 3, flight: 'AI-204', from: 'Chennai', to: 'Hyderabad', time: '3:00 PM' }
];

const FlightList = () => {
  return (
    <div>
      <h2>Available Flights</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {flights.map(f => (
            <tr key={f.id}>
              <td>{f.flight}</td>
              <td>{f.from}</td>
              <td>{f.to}</td>
              <td>{f.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightList;
