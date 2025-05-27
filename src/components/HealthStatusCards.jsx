// src/components/HealthStatusCards.js
import React from 'react';
import { healthStatusCards } from '../data/mockData';
import styles from '../styles/HealthStatusCards.module.css';

const HealthStatusCards = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'healthy': return styles.healthy;
      case 'issue': return styles.issue;
      case 'warning': return styles.warning;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      {healthStatusCards.map(card => (
        <div key={card.id} className={`${styles.card} ${getStatusClass(card.status)}`}>
          <div className={styles.icon}>
            {/* You'd import actual SVG here, for now using dummy content */}
            {card.icon && <img src={card.icon} alt={card.title} />}
            {!card.icon && '✨'} {/* Fallback for missing icon */}
          </div>
          <div className={styles.details}>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.date}>{card.date}</div>
          </div>
          <div className={styles.statusIndicator}></div>
        </div>
      ))}
      <a href="#details" className={styles.detailsLink}>Details</a>
    </div>
  );
};

export default HealthStatusCards;