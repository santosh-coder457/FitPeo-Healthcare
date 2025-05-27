// src/App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './App.css'; // Import the global App.css

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-layout"> {/* Wrapper for header and main content */}
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;