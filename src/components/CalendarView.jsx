// src/components/CalendarView.js
import React from 'react';
import { calendarAppointments, currentAppointmentDetails } from '../data/mockData';
import styles from '../styles/CalendarView.module.css';

const CalendarView = () => {
  const daysInMonth = 31; // October has 31 days
  const firstDayOfMonth = 5; // October 1st, 2021 was a Friday (0=Sun, 1=Mon, ..., 5=Fri)

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const leadingBlanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.monthNav}>
          <span>&lt;</span>
          <h3 className={styles.monthTitle}>October 2021</h3>
          <span>&gt;</span>
        </div>
      </div>
      <div className={styles.calendarGrid}>
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className={styles.dayOfWeek}>
            {day}
          </div>
        ))}
        {leadingBlanks.map((_, i) => (
          <div key={`blank-${i}`} className={styles.blankDay}></div>
        ))}
        {days.map(day => (
          <div
            key={day}
            className={`${styles.calendarDay} ${
              Object.keys(calendarAppointments).includes(String(day)) ? styles.hasAppointments : ''
            }`}
          >
            <div className={styles.date}>{day}</div>
            <div className={styles.appointments}>
              {calendarAppointments[day]?.map((time, index) => (
                <span key={index} className={styles.appointmentTime}>
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.appointmentDetails}>
        {currentAppointmentDetails.map(appt => (
          <div key={appt.id} className={styles.appointmentCard}>
            <div className={styles.appointmentIcon}>{appt.icon}</div>
            <div className={styles.appointmentInfo}>
              <div className={styles.appointmentType}>{appt.type}</div>
              <div className={styles.appointmentTimeRange}>{appt.time}</div>
              <div className={styles.appointmentDoctor}>{appt.doctor}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;