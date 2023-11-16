// src/components/UserPage.js
import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import api from '../services/api';

const UserPage = ({ username }) => {
  const [userNews, setUserNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userNewsData = await api.fetchUserNews(username);
        setUserNews(userNewsData);
      } catch (error) {
        console.error(`Error fetching news for user ${username}:`, error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      <h2>{`${username}'s News`}</h2>
      <NewsList news={userNews} />
    </div>
  );
};

export default UserPage;