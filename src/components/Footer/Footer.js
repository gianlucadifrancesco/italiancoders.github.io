import React from 'react';
import FooterTop from '../Footer/FooterTop/FooterTop';
import FooterMiddle from '../Footer/FooterMiddle/FooterMiddle';
import FooterBottom from '../Footer/FooterBottom/FooterBottom';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div>
      <div className={styles.footerTop}>
        <FooterTop />
      </div>
      <div className={styles.footerMiddle}>
        <FooterMiddle />
      </div>
      <div className={styles.footerBottom}>
        <FooterBottom />
      </div>
    </div>
  );
}
