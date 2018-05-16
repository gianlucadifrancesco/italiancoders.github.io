import React from 'react';
import './Header.css';

// import logo from './../../assets/logo.png';

export default function () {
  return (
    <div className="headerBackground">
      <div className="menu">
        <a>asd</a>
        <a>asd2</a>
      </div>
      <div className="logo">
        {/*<img src={logo} alt="logo" style={{ height: '75px' }} />*/}
      </div>
      <div className="search">
        <input type="text" className="searchBox" placeholder="Cerca"></input>
      </div>
    </div>
  );
}
