import React from 'react';

const StoreList = ({ stores }) => {
  return (
    <div className="store-list">
      <h2>All Stores</h2>
      <div className="grid-container">
        {stores.map((store, index) => (
          <div key={index} className="store-card">
            <h3>{store.storeName}</h3>
            <p>Large Order Threshold: {store.largeOrderThresholdCount}</p>
            <p>Operating Status: {store.operatingStatus}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
