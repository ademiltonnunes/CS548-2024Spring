import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreList from './StoreList';
import useZipcodeValidation from '../hooks/zipCodeValidation';

const Main = () => {
  const [stores, setStores] = useState([]);
  // const [zipcode, setZipcode] = useState('');
  const { zipcode, handleZipcodeChange, validateZipcode, error } = useZipcodeValidation();

  useEffect(() => {
    fetchAllStores();
  }, []);

  const fetchAllStores = async () => {
    try {
      const response = await axios.get('https://localhost:8080/store', { rejectUnauthorized: false });
      setStores(response?.data.ecomStores);
    } catch (error) {
      console.error('Error fetching all stores:', error);
    }
  }

  const filterStoresByZipcode = async () => {
    try {

      if (!validateZipcode()) {
        return; // Exit early if validation fails
      }
      
      const response = await axios.post('https://localhost:8080/store/zipcode', { zipCode: zipcode });
      console.log('response:', response);
      setStores(response?.data);
    } catch (error) {
      console.error('Error filtering stores by ZIP code:', error);
    }
  }
  

  return (
    <div className="app">
      <h1>Safeway - Grocery Stores</h1>
      <div className="store-filter">
        <h2>Filter by ZIP Code</h2>
        <input
          type="text"
          placeholder="Enter ZIP Code"
          value={zipcode}
          onChange={(e) => handleZipcodeChange(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button onClick={filterStoresByZipcode}>Filter</button>
      </div>
      <StoreList stores={stores} />
    </div>
  );
};

export default Main;
