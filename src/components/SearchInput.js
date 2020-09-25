import React from 'react';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

function SearchInput(props) {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search Contacts"></input>
      <span className="input-icon">
        <SearchIcon />
      </span>
    </div>
  );
}

export default SearchInput;
