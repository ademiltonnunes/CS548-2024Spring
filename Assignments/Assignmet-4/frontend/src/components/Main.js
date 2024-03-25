import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StoreList from './StoreList';
import StoreFilter from './StoreFilter';


const Main = () => {

  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);

  useEffect(() => {
    fetchAllStores();
  }, []);

  const fetchAllStores = async () => {

    try{      
      const response = await axios.get('https://localhost:8080/store');
      setStores(response?.data.ecomStores);
      setFilteredStores(response?.data.ecomStores);
    
    }catch(error){
      console.error('Error fetching all stores:', error);
    }
 
  }
  const filterStoresByZipcode = (zipcode) => {
    axios.post('https://localhost:8080/store/zipcode', { zipCode: zipcode })
      .then(response => {
        setFilteredStores(response.data.ecomStores);
      })
      .catch(error => {
        console.error('Error filtering stores by ZIP code:', error);
      });
  };

  return (
    <div className="app">
      <h1>Safeway - Grocery Stores</h1>
      <StoreFilter onFilter={filterStoresByZipcode} />
      <StoreList stores={filteredStores} />
    </div>
  );
};
export default Main;
