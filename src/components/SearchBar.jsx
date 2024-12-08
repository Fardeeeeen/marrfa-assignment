import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search by title..."
        value={inputValue}
        onChange={handleInputChange}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  searchBar: {
    flex: 1, // Allow it to take up available space within the flex container
  },
  input: {
    width: '100%', // Full width of the parent container
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
};

export default SearchBar;
