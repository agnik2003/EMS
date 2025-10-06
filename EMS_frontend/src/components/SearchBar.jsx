import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchKeyword, setSearchKeyword, suggestions, onSearch, onSelect }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="search-bar">
      <div className="search-bar-row">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchKeyword}
          onChange={(e) => {
            setSearchKeyword(e.target.value);
            setShowSuggestions(true);
          }}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          onFocus={() => setShowSuggestions(true)}
        />
        <button onClick={onSearch}>Search</button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map(s => (
            <li key={s.id} onClick={() => { onSelect(s.name); setShowSuggestions(false); }}>
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
