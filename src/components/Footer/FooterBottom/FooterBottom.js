import React from 'react';
import MainContainer from '../../MainContainer/MainContainer';
import './FooterBottom.css';

export default function FooterBottom() {
  return (
    <MainContainer>
      <div className="footerBottomContainer">
        <div className="links">
          <a>FAQ</a>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
        <div className="links">
          <a>Hosted by GitHub Pages</a>
          <a>All rights reserved</a>
        </div>
      </div>
    </MainContainer>
  );
}
