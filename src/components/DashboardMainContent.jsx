// src/components/DashboardMainContent.js
import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import styles from '../styles/DashboardMainContent.module.css';

const DashboardMainContent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.dashboardTitle}>Dashboard</h2>
      <DashboardOverview />
      <div className={styles.bottomSection}>
        <CalendarView />
        <div className={styles.rightColumn}>
          <UpcomingSchedule />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;