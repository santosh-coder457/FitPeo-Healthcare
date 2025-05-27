// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// If Create React App created an index.css, you might want to remove it
// import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);