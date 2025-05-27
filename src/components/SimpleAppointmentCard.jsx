// src/components/SimpleAppointmentCard.js
import React from 'react';
import styles from '../styles/SimpleAppointmentCard.module.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;