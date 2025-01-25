import React, { useState } from 'react';

function KmToMilesConverter() {

  const [km, setKm] = useState(0);
  const [miles, setMiles] = useState(null); 
  const [error, setError] = useState(''); 

  
  const storeKm = (e) => {
    
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setKm(value);
    setError(''); 
  };

  
  const convertToMiles = () => {
    if (isNaN(km) || km === '') {
      setError('Please enter a valid number!');
      setMiles(null); 
    } else {
      const convertedMiles = km * 0.621371;
      setMiles(convertedMiles);
      setError(''); 
    }
  };

  return (
    <div>
      <h1>Kilometers to Miles Converter</h1>
      <form>
        <label>Enter Distance in Kilometers: </label>
        <input
          type="number"
          placeholder="Enter Kilometers"
          onChange={storeKm}
          value={km} 
        />
        <br />
        <input
          type="button"
          value="Convert to Miles"
          onClick={convertToMiles}
        />
        
       
        {error && <h3 style={{ color: 'red' }}>{error}</h3>}

        
        {miles !== null && !error && (
          <h2>Distance in Miles: {miles.toFixed(4)}</h2>
        )}
      </form>
    </div>
  );
}

export default KmToMilesConverter;
