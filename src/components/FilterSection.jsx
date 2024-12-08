import React, { useState } from 'react';

const FilterSection = ({ onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterChange = (category) => {
    let updatedCategories;
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((item) => item !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(updatedCategories);
    onFilter(updatedCategories);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    onFilter([]);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="search-filter-container">
      <button
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          background: 'linear-gradient(90deg, var(--gradient1), var(--dark-blue))', 
          color: '#fff',
          border: 'none',
          borderRadius: '30px', 
          cursor: 'pointer',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
          width: '150px',
        }}
        onClick={toggleDropdown}
      >
        Filters
      </button>

      {isDropdownOpen && (
        <div
          style={{
            zIndex: 1000,
            padding: '10px',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            gap:'30px',
          }}
        >
          <div
            style={{
              display:'flex',
              gap:'50px',
              flexWrap:'wrap',
            }}
          >
            {['Technology', 'Lifestyle', 'Design', 'Business', 'Health', 'Science'].map((category) => (
              <label key={category} style={{ display: 'block', marginBottom: '8px' }}>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleFilterChange(category)}
                />{' '}
                {category}
              </label>
            ))}
          </div>
          <button
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              background: 'linear-gradient(90deg, var(--gradient1), var(--dark-blue))',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
