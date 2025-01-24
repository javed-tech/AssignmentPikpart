import React from 'react';
import './Header.css';
import Back from "./assets/back.png";

const Header = ({ style }) => {
  return (
    <header className="header" style={style}>
      <div className="header-content">
        <img 
          src={Back} 
          alt="Back Arrow" 
          className="back-arrow"
        />
        <h1 className="title">Product Listing</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  style: {}
};

export default Header;

