// src/components/Sidebar.js
import React from 'react';
import { navLinks } from '../data/mockData';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.generalHeading}>General</div>
      <nav className={styles.navLinks}>
        <ul>
          {navLinks.map(link => (
            <li key={link.id} className={link.id === 'dashboard' ? styles.active : ''}>
              <a href={`#${link.id}`}>
                <span className={styles.icon}>{link.icon}</span>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;