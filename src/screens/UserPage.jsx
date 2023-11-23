import React, { useEffect } from 'react';
// import NewsList from './NewsList';
// import { useQuery } from 'react-query';
// import api from '../services/api';
import Header from '../components/header';
import '../App.css'; 

const UserPage = ({ username }) => {
  // const { data: userNews, error } = useQuery(['userNews', username], () => api.fetchUserNews(username));

  // useEffect(() => {
  //   if (error) {
  //     console.error(`Error fetching news for user ${username}:`, error);
  //   }
  // }, [error, username]);

  return (
    <div className="user-page">
      <Header />
      <div className="user-info">
        <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="User avatar" className="user-avatar" />
        <h2 className="user-name">{username}</h2>
      </div>
      <div className="subscriptions">
        <h2>Мои подписки</h2>
        {/* Здесь будут отображаться подписки пользователя */}
      </div>
      <h2>{`${username}'s News`}</h2>
      {/* <NewsList news={userNews} /> */}
      
    </div>
    
  );
};

export default UserPage;
