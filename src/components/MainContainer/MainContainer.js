import React from 'react';
import styles from './MainContainer.css';

export default function Container({ children }) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  );
}
