// RegistrationPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import '../App.css'


const RegistrationPage = () => {
  const setUsername = useStore(state => state.setUsername);
  const setPassword = useStore(state => state.setPassword);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleRegistration = async (data) => {
    try {
      const response = await api.register(data);
      // Обработаем успешный ответ
      console.log(response);

      //  перенаправление пользователя на страницу входа
      navigate('/login');
    } catch (error) {
      console.error('Error:', error.message);
      // Обработаем ошибку
    }
  };

  const handleSwitchToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="registration-page">
      <div className="form-container">
        <h2>Создание Аккаунта</h2>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="input-field">
            <label className="title-input">Имя:</label>
            <input type="text" {...register('username')} />
          </div>
          <div className="input-field">
            <label>Пароль:</label>
            <input type="password" {...register('password')} />
          </div>
          <button type="submit">Создать Аккаунт</button>
        </form>
        <button className="switch-btn" onClick={handleSwitchToLogin}>Авторизация</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
