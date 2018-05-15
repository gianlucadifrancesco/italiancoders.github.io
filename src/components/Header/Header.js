import React from 'react';
import styles from './header.module.css';

import logo from "./../../assets/favicon.png"

export default function(props) {
  return(
    <div className={styles.headerBackground}>
      <div className={styles.box} style={{ marginRight: 'auto' }}>
          <a>asd</a>
          <a>asd2</a>
      </div>
      <div className={styles.box}>
        <img src={logo} style={{ width: 64, height: 64 }} />
      </div>
      <div className={styles.box}>
        <a style={{ marginLeft: 'auto' }}>asd2</a>
      </div>
    </div>
  );
}
