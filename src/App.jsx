// src/App.jsx (or App.js)
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent.jsx';
import './App.css'; // Make sure this path is correct

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-layout">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;