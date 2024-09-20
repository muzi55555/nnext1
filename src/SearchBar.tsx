'use client';
import React, { useState } from 'react';

function SearchBar() {
  const [search, setSearch] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input onChange={onChange} type='text' />
      <button>버튼</button>
    </div>
  );
}

export default SearchBar;
