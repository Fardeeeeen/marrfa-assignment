import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FilterSection from './components/FilterSection';
import ResultsList from './components/ResultsList';
import Pagination from './components/Pagination';
import Footer from './components/Footer'; // Import the Footer component
import dummyData from './data/dummyData';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(dummyData);
  const [filteredResults, setFilteredResults] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = dummyData.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) &&
        (filteredResults.length > 0 ? filteredResults.includes(item) : true)
    );
    setResults(filtered);
    setCurrentPage(1);
  };

  const handleFilter = (categories) => {
    const filtered = dummyData.filter(
      (item) =>
        (categories.length === 0 || categories.includes(item.category)) &&
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
    setFilteredResults(filtered);
    setCurrentPage(1);
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Explore Our Trending Blogs</h1>
        <p>Discover the latest blogs on any topics you require.</p>
      </div>
      <div className="content">
        <SearchBar onSearch={handleSearch} />
        <FilterSection onFilter={handleFilter} />
        <ResultsList results={currentResults} searchTerm={searchTerm} />
        <Pagination
          totalResults={results.length}
          resultsPerPage={resultsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default App;
