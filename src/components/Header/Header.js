import React from 'react';
import './Header.css';

// import logo from './../../assets/logo.png';

export default function () {
  return (
    <div className="headerBackground">
      <div className="menu">
        <a style={{ alignItems: 'center', display: 'flex' }}><i className="personalIcon">;</i>Programmazione</a>
        <a href="authors" style={{ alignItems: 'center', display: 'flex' }}><i className="material-icons" style={{ marginRight: '10px' }}>people</i>Autori</a>
      </div>
      <div className="logo">
        {/*<img src={logo} alt="logo" style={{ height: '75px' }} />*/}
      </div>
      <div className="search">
        <input type="text" className="searchBox" placeholder="Cerca" />
      </div>
    </div>
  );
}
