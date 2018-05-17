import React from 'react';

import styles from './MainContainer.module.css';

export default function MainContainer({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
