import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const EmployeeCard = ({ employee }) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? '#333' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px'
      }}
    >
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <button className={theme === 'dark' ? 'btn-dark' : 'btn-light'}>
        Message
      </button>
    </div>
  );
};

export default EmployeeCard;
