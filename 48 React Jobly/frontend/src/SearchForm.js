import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

import './SearchForm.css';

// Search form for Companies & Jobs list
// filters the API with params

function SearchForm({ search }) {
  const [searchTerm, setSearchTerm] = useState('');

  /** Tell parent to filter */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  /** Update form fields */
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <Input
          className="SearchField center-block"
          type="search"
          name="searchTerm"
          placeholder="Enter search term.."
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit" className="btn btn-lg btn-dark search-btn">
          Search!
        </Button>
      </form>
    </div>
  );
}

export default SearchForm;
