// src/components/AdminPage.js
import React, { useEffect, useState } from 'react';
import NewsList from './NewsList';
import api from '../services/api';

const AdminPage = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsData = await api.fetchAllNews();
        setAllNews(newsData);
      } catch (error) {
        console.error('Error fetching all news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Page</h2>
      <NewsList news={allNews} />
    </div>
  );
};

export default AdminPage;