import React, { useState } from 'react';

const StoreFilter = ({ onFilter }) => {
  const [zipcode, setZipcode] = useState('');

  const handleFilter = () => {
    onFilter(zipcode);
    setZipcode('');
  };

  return (
    <div className="store-filter">
      <h2>Filter by ZIP Code</h2>
      <input
        type="text"
        placeholder="Enter ZIP Code"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default StoreFilter;
