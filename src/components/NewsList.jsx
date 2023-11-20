import React from 'react';

const NewsList = ({ news }) => (
  <div>
    <h2>News List</h2>
    <ul>
      {news && news.map(item => (
        <li key={item.NewsID}>{item.Title} - {item.Status} - {item.DataNews}</li>
      ))}
    </ul>
  </div>
);

export default NewsList;
