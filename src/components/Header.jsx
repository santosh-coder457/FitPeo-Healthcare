// src/components/Header.js
import React from 'react';
import styles from '../styles/Header.module.css';
import UserAvatar from '../assets/user-avatar.png'; // Make sure you have this image

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" />
        <span className={styles.searchIcon}>🔍</span>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.icons}>
          <span className={styles.notificationIcon}>🔔</span>
          <button className={styles.addButton}>+</button>
        </div>
        <div className={styles.profile}>
          <img src={UserAvatar} alt="User Avatar" className={styles.avatar} />
          <span className={styles.userName}>Santhosh</span>
        </div>
      </div>
    </header>
  );
};

export default Header;