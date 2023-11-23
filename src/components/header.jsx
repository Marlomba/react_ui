import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div className="header">
        <Link to="/news" className="news-button">
          Новости
        </Link>
        <Link to="/login" className="news-button">
          Выход
        </Link>
        <Link to="/user" className="news-button">
          Профиль
        </Link>
      </div>
    );
  };

export default Header;
