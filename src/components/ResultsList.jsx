import React from 'react';
import ResultCard from './ResultCard';

const ResultsList = ({ results, searchTerm = '' }) => {
  if (results.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>No results found.</p>;
  }

  return (
    <div className="results-container">
      {results.map((item) => (
        <ResultCard
          key={item.id}
          title={item.title}
          category={item.category}
          content={item.content}
          searchTerm={searchTerm}
          level={item.level}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default ResultsList;
