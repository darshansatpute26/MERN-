import React, { useState } from 'react';

function BMICalculator() {
 
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

  
  const storeWeight = (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setWeight(value);
    setError(''); 
  };

  
  const storeHeight = (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : 0;
    setHeight(value);
    setError(''); 
  };

  
  const calculateBMI = () => {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      setError('Please enter valid positive numbers for both weight and height!');
      setBmi(null); 
    } else {
      const bmiResult = weight / (height * height); 
      setBmi(bmiResult.toFixed(2)); 
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <form>
        <label>Enter Your Weight (kg): </label>
        <input
          type="number"
          placeholder="Weight in kilograms"
          onChange={storeWeight}
          value={weight}
        />
        <br />
        <label>Enter Your Height (m): </label>
        <input
          type="number"
          step="0.01"
          placeholder="Height in meters"
          onChange={storeHeight}
          value={height}
        />
        <br />
        <input
          type="button"
          value="Calculate BMI"
          onClick={calculateBMI}
        />
        
    
        {error && <h3 style={{ color: 'red' }}>{error}</h3>}

        {bmi !== null && !error && (
          <h2>Your BMI: {bmi}</h2>
        )}
      </form>
    </div>
  );
}

export default BMICalculator;
