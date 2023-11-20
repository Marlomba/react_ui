import React, { useEffect } from 'react';
import NewsList from './NewsList';
import { useQuery } from 'react-query';
import api from '../services/api';

const UserPage = ({ username }) => {
  const { data: userNews, error } = useQuery(['userNews', username], () => api.fetchUserNews(username));

  useEffect(() => {
    if (error) {
      console.error(`Error fetching news for user ${username}:`, error);
    }
  }, [error, username]);

  return (
    <div>
      <h2>{`${username}'s News`}</h2>
      <NewsList news={userNews} />
    </div>
  );
};

export default UserPage;
