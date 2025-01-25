import React, { useState } from 'react';

function Comp1() {
  // Declare state variables for the two numbers and the result
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);
  const [res, setres] = useState(0);

  // Handle storing the first number
  const storenum1 = (e) => {
    setnum1(parseFloat(e.target.value));
  };

  // Handle storing the second number
  const storenum2 = (e) => {
    setnum2(parseFloat(e.target.value));
  };

  // Addition function
  const addition = () => {
    setres(num1 + num2);
  };

  // Subtraction function
  const subtraction = () => {
    setres(num1 - num2);
  };

  // Multiplication function
  const multiplication = () => {
    setres(num1 * num2);
  };

  // Division function with zero check
  const division = () => {
    if (num2 !== 0) {
      setres(num1 / num2);
    } else {
      setres("Cannot divide by zero");
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <form>
        <label>Enter First Number: </label>
        <input
          type="number"
          placeholder="Enter Number"
          onChange={storenum1}
        />
        <br />
        <label>Enter Second Number: </label>
        <input
          type="number"
          placeholder="Enter Number"
          onChange={storenum2}
        />
        <br />
        <input type="button" value="Add" onClick={addition} />
        <input type="button" value="Sub" onClick={subtraction} />
        <input type="button" value="Mul" onClick={multiplication} />
        <input type="button" value="Div" onClick={division} />
        <h1>Result: {res}</h1>
      </form>
    </div>
  );
}

export default Comp1;
