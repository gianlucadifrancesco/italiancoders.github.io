import React from 'react';
import MainContainer from '../../MainContainer/MainContainer';

import styles from './FooterBottom.module.css';

export default function FooterBottom() {
  return (
    <MainContainer>
      <div className={styles.footerBottomContainer}>
        <div className={styles.links}>
          <a>FAQ</a>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
        <div className={styles.links}>
          <a>Hosted by GitHub Pages</a>
          <a>All rights reserved</a>
        </div>
      </div>
    </MainContainer>
  );
}
