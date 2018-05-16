import React from 'react';
import './MainContainer.css';

export default function MainContainer({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
