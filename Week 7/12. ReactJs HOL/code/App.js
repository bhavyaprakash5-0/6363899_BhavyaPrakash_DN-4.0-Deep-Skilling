import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      <button onClick={handleToggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <hr />

      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
