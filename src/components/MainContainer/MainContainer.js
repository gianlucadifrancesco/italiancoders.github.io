import React from 'react';
import styles from 'src/components/MainContainer/mainContainer.module.css';

export default function Container({ children }) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  );
}
