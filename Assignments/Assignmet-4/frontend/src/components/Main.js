import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreList from './StoreList';

const Main = () => {
  const [stores, setStores] = useState([]);
  const [zipcode, setZipcode] = useState('');

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

      if (!zipcode) {
        fetchAllStores();
        return;
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
          onChange={(e) => setZipcode(e.target.value)}
        />
        <button onClick={filterStoresByZipcode}>Filter</button>
      </div>
      <StoreList stores={stores} />
    </div>
  );
};

export default Main;
