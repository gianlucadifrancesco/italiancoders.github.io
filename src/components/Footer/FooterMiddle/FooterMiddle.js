import React from 'react';
import MainContainer from '../../MainContainer/MainContainer';

import styles from './FooterMiddle.module.css';
import logo from './../../../assets/minilogo.png';
import githubLogo from './../../../assets/githubLogo.png';
import facebookLogo from './../../../assets/facebookLogo.png';
import slackLogo from './../../../assets/slackLogo.png';

export default function FooterMiddle() {
  return (
    <MainContainer>
      <div className={styles.footerMiddleContainer}>
        <div className={styles.info}>
          <div className={styles.infoTitle}>
            <div style={{ width: '50px' }}>
              <img src={logo} alt="logo" style={{ height: '50px' }} />
            </div>
            <div style={{ marginTop: '.6em' }}>
              <span style={{ fontSize: '1.5em', marginLeft: '.6em' }}>ItalianCoders</span>
            </div>
          </div>
          <div className={styles.infoDescription}>
            <span>Il blog italiano per eccellenza<br />sullo sviluppo software</span>
          </div>
          <div className={styles.infoSocial}>
            <a href="https://github.com/ItalianCoders/italiancoders.github.io" target="_blank" rel="noopener noreferer"><img src={githubLogo} alt="logo" /></a>
            <a href="https://www.facebook.com/italiancoders/" target="_blank" rel="noopener noreferer"><img src={facebookLogo} alt="logo" /></a>
            <a href="http://italiancoders.slack.com/" target="_blank" rel="noopener noreferer"><img src={slackLogo} alt="logo" /></a>
          </div>
        </div>
        <div className={styles.info}>
          <nav className={styles.infoNav}>
            <div>
              <strong>ItalianCoders</strong>
              <div className={styles.infoMenu}>
                <a href="#1">Chi siamo</a>
                <a href="#2">Autori</a>
                <a href="#3">Contattaci</a>
              </div>
            </div>
            <div>
              <strong>Community</strong>
              <div className={styles.infoMenu}>
                <a href="#4">Sottomiss</a>
                <a href="#5">Sottomuss</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </MainContainer>
  );
}
