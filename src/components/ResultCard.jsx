import React from 'react';

const ResultCard = ({ title, category, content, searchTerm, level, date }) => {
  const highlightText = (text) => {
    if (!searchTerm) return text;
    const escapedTerm = searchTerm.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="result-card">
      <h3 className="result-title">{highlightText(title)}</h3>
      <p className="result-category">Category: {category}</p>
      <p className="result-content">{highlightText(content)}</p>
      <p className="result-level">Level: {level}</p>
      <p className="result-date">Published on: {new Date(date).toLocaleDateString()}</p>
    </div>
  );
};

export default ResultCard;
