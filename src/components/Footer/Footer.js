import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import FooterBottom from '../Footer/FooterBottom/FooterBottom';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <div className="footerTop">
        <MainContainer>
          Miss
        </MainContainer>
      </div>
      <div className="footerMid">
        <MainContainer>
          Muss
        </MainContainer>
      </div>
      <div className="footerBottom">
        <MainContainer>
          <FooterBottom />
        </MainContainer>
      </div>
    </div>
  );
}
