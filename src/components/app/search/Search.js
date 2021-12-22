import { useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import { SHIP_SEARCH_QUERY } from '../../../services/queries.js';

const Search = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [executeSearch, { data }] = useLazyQuery(SHIP_SEARCH_QUERY);

  return (
    <>
      <div>
        Search
        <input
          type="text"
          value={searchFilter}
          placeholder="Type character name"
          onChange={(e) => setSearchFilter(e.target.value)}
        />
        <button
          onClick={() =>
            executeSearch({
              variables: { filter: searchFilter },
            })
          }
        >
          OK
        </button>
      </div>
      {data &&
        data.ships.map((ship, index) => (
          <div key={ship.name} index={index} ship={ship}>
            <h1>{ship.name}</h1>
          </div>
        ))}
    </>
  );
};

export default Search;
