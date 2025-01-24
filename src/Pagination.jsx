import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';
import Prev from "./assets/prev.png";
import Next from "./assets/next.png";

const Pagination = ({ style, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-container" style={style}>
      <button 
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={Prev} alt="Previous" className="arrow-icon" />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button 
          key={index}
          className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button 
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={Next} alt="Next" className="arrow-icon" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  style: PropTypes.object,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  style: {},
  currentPage: 1,
  totalPages: 10,
  onPageChange: () => {},
};

export default Pagination;

