import React from 'react';

import styles from './Header.module.css';
import logo from './../../assets/logo.png';

export default function () {
  return (
    <div className={styles.headerBackground}>
      <div className={styles.headerContainer}>
        <div className={styles.menu}>
          <a style={{ alignItems: 'center', display: 'flex' }}><span className={styles.personalIcon}>;</span>Programmazione</a>
          <a href="authors" style={{ alignItems: 'center', display: 'flex' }}><i className="materialIcons" style={{ marginRight: '10px' }}>people</i>Autori</a>
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" style={{ height: '75px' }} />
        </div>
        <div className={styles.search}>
          <input type="text" className={styles.searchBox} placeholder="Cerca" />
        </div>
      </div>
    </div>
  );
}
