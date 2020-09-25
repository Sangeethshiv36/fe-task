import React from 'react';
import SearchInput from './SearchInput';

function ContactsHeader() {
  return (
    <>
      <div className="top-content">
        <div className="ct-header">
          <h1>Contacts</h1>
          <sub>Welcome to FlatCRM Contact page</sub>
        </div>
        <div className="sort-contacts">
          <span>
            Sort by: <strong>Date Created </strong>
          </span>
        </div>
      </div>
      <div className="bottom-content">
        <SearchInput />
        <button className="add-ct-btn">
          <strong> + Add Contact</strong>
        </button>
      </div>
    </>
  );
}

export default ContactsHeader;
