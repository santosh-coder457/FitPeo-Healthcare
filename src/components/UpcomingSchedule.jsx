// src/components/UpcomingSchedule.js
import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingSchedule } from '../data/mockData';
import styles from '../styles/UpcomingSchedule.module.css';

const UpcomingSchedule = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>The Upcoming Schedule</h3>
      {upcomingSchedule.map((dayData, index) => (
        <div key={index} className={styles.daySection}>
          <div className={styles.dayHeader}>{dayData.day}</div>
          {dayData.appointments.map(appointment => (
            <SimpleAppointmentCard
              key={appointment.id}
              title={appointment.title}
              time={appointment.time}
              icon={appointment.icon}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;