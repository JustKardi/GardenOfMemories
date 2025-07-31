import React, { useEffect, useState } from 'react';
import LandingPage from './Pages/LandingPage';
import { getTestMessage } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getTestMessage().then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <LandingPage />
      <p style={{ color: 'white', padding: '1rem' }}>{message}</p>
    </div>
  );
}

export default App;
