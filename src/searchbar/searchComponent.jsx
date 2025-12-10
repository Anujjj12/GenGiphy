import React, { useState, useEffect, useCallback } from 'react';
import useDebounce from './useDebounce';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const debouncedQuery = useDebounce(query, 500);

  const fetchResults = useCallback(async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=uBjiL1TsBZMW0cJATR7AHH64nuqj0EqF&q=${searchQuery}&limit=20`
    );

    const data = await response.json();
    setResults(data.data);
  }, []);

  useEffect(() => {
    fetchResults(debouncedQuery);
  }, [debouncedQuery, fetchResults]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GIFs..."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {results.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;