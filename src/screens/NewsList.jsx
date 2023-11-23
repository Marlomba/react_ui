import React from 'react';
import '../App.css';
import Header from '../components/header';

const NewsList = () => (
  <div className="news-list">
    <Header />
    <h2>News List</h2>
    <ul>
      <li className="news-card">
        <img src="news1.jpg" alt="News 1" />
        <h3>Title 1</h3>
        <p>Status: Status 1</p>
        <p>Date: Date 1</p>
      </li>
      <li className="news-card">
        <img src="news2.jpg" alt="News 2" />
        <h3>Title 2</h3>
        <p>Status: Status 2</p>
        <p>Date: Date 2</p>
      </li>
    </ul>
  </div>
);

export default NewsList;
