// src/components/AnatomySection.js
import React from 'react';
import { anatomicalData } from '../data/mockData';
import styles from '../styles/AnatomySection.module.css';
import HumanBodySVG from '../assets/human-body.svg'; // Ensure you have this SVG

const AnatomySection = () => {
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
      <div className={styles.bodyImageWrapper}>
        <img src={HumanBodySVG} alt="Human Body" className={styles.humanBodyImage} />
        {anatomicalData.map(part => (
          <div
            key={part.id}
            className={`${styles.indicator} ${getStatusClass(part.status)}`}
            style={{ top: part.position.top, left: part.position.left }}
          >
            <span className={styles.indicatorDot}></span>
            <span className={styles.indicatorLabel}>{part.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;