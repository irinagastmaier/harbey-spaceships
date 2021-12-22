import React from 'react';
import Ships from '../ships/DefaulltShips';
import Search from './search/Search';

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
      {/* <Search /> */}
      <Ships />
    </div>
  );
}
