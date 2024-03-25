import { useState } from 'react';

// Hook for zipcode validation
const useZipcodeValidation = () => {
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState(null);

  const handleZipcodeChange = (value) => {
    setZipcode(value);
    setError(null);
  };

  const validateZipcode = () => {
    if (!zipcode) {
      setError('Zipcode cannot be empty');
      return false;
    }

    return true;
  };

  return { zipcode, handleZipcodeChange, validateZipcode, error };
};

export default useZipcodeValidation;
