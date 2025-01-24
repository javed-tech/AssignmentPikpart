import React from 'react';
import './SearchBar.css';
import Search from "./assets/search.png";

const SearchBar = ({ style, onChange }) => {
  return (
    <div className="search-bar" style={style}>
      <img 
        src={Search} 
        alt="search"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="Product"
        className="search-input"
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  style: {
    width: '461px',
    height: '44px'
  },
  onChange: () => {}
};

export default SearchBar;
