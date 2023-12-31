import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../screens/LoginPage';
import RegistrationPage from '../screens/RegistrationPage';
import UserPage from '../screens/UserPage';
import AdminPage from '../screens/AdminPage';
import NewsList from '../screens/NewsList'; 
import useStore from '../store';

const MainRouter = () => {
  const currentForm = useStore(state => state.currentForm);
  const setCurrentForm = useStore(state => state.setCurrentForm);

  const handleSwitchForm = (form) => {
    setCurrentForm(form);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onSwitchForm={handleSwitchForm} />}
      />
      <Route
        path="/register"
        element={<RegistrationPage onSwitchForm={handleSwitchForm} />}
      />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/news" element={<NewsList />} /> 
      <Route path="/" element={<Navigate to={`/${currentForm}`} />} />
    </Routes>
  );
};

export default MainRouter;
