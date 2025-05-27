// src/components/ActivityFeed.js
import React from 'react';
import { activityData } from '../data/mockData';
import styles from '../styles/ActivityFeed.module.css';

const ActivityFeed = () => {
  const maxBarHeight = Math.max(...activityData.map(d => d.value));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <span className={styles.appointmentCount}>3 appointments on this week</span>
      </div>
      <div className={styles.chart}>
        {activityData.map((data, index) => (
          <div key={index} className={styles.barWrapper}>
            <div
              className={styles.bar}
              style={{ height: `${(data.value / maxBarHeight) * 100}%` }}
            ></div>
            <div className={styles.dayLabel}>{data.day}</div>
          </div>
        ))}
      </div>
      <div className={styles.detailsLink}>
        <a href="#details">Details</a>
      </div>
    </div>
  );
};

export default ActivityFeed;