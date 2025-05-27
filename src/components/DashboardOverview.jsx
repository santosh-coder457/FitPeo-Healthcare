// src/components/DashboardOverview.js
import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import styles from '../styles/DashboardOverview.module.css';

const DashboardOverview = () => {
  return (
    <div className={styles.container}>
      <AnatomySection />
      <HealthStatusCards />
    </div>
  );
};

export default DashboardOverview;