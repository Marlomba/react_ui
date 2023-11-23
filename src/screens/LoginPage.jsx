// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store';
import { useForm } from 'react-hook-form';
import api from '../services/api';
import '../App.css'

const LoginPage = () => {
  const setUsername = useStore(state => state.setUsername);
  const setPassword = useStore(state => state.setPassword);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await api.login(data);
      // Обработаем успешный ответ
      console.log(response);



      // Перенаправим пользователя на другую страницу
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error.message);
      // Обработаем ошибку
    }
  };

  const handleSwitchToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="input-field">
            <label className="title-input">Имя:</label>
            <input type="text" {...register('username')} />
          </div>
          <div className="input-field">
            <label>Пароль:</label>
            <input type="password" {...register('password')} />
          </div>
          <button type="submit">Войти</button>
        </form>
        <button className="switch-btn" onClick={handleSwitchToRegister}>Нет Аккаунта</button>
      </div>
    </div>
  );
};

export default LoginPage;
