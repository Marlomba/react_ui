import React, { useEffect } from 'react';
import NewsList from './NewsList';
import { useQuery } from 'react-query';
import api from '../services/api';

const AdminPage = () => {
  const { data: allNews, error } = useQuery('allNews', api.fetchAllNews);

  useEffect(() => {
    if (error) {
      console.error('Error fetching all news:', error);
    }
  }, [error]);

  return (
    <div>
      <h2>Admin Page</h2>
      <NewsList news={allNews} />
    </div>
  );
};

export default AdminPage;
