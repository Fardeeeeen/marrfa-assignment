import React, { useState } from 'react';

const Pagination = ({ totalResults, resultsPerPage, onPageChange, currentPage }) => {
  const [hoveredPage, setHoveredPage] = useState(null); // To track the hovered page number
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={styles.pagination}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          onMouseEnter={() => setHoveredPage(number)}
          onMouseLeave={() => setHoveredPage(null)}
          style={{
            ...styles.pageButton,
            background:
              currentPage === number
                ? 'linear-gradient(90deg, var(--gradient1), var(--dark-blue))'
                : '#fff',
            color: currentPage === number ? '#fff' : '#000',
            boxShadow:
              currentPage === number || hoveredPage === number
                ? '0 4px 8px rgba(0, 0, 0, 0.2)'
                : 'none',
            transform: hoveredPage === number ? 'scale(1.05)' : 'scale(1)', 
          }}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

const styles = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  pageButton: {
    margin: '0 5px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease', 
  },
};

export default Pagination;
