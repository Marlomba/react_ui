import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    // тут будет логика для отправки данных на сервер для регистрации
  };

  const handleSwitchToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <h2>Registration</h2>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleRegistration}>Register</button>
      </form>
      <br />
      <button onClick={handleSwitchToLogin}>Switch to Login</button>
    </div>
  );
};

export default RegistrationPage;
