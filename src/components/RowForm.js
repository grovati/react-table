import React from 'react';
import styled from 'styled-components';

// Collect user input to create a new row in table
const RowForm = ({data, setData}) => {
  // Collect values from form element to create an object that will be added to out data
  const submitHandle = (e) => {
    const newRowData = {
      select: false
    };

    e.preventDefault();

    for(let i = 0; i < e.target.length - 1; i += 1) {
      newRowData[e.target[i].name] = e.target[i].value;
    };

    setData([...data, newRowData]);

    e.target.reset();
  };

  return (
    <form onSubmit={submitHandle}>
      <h3>Create Row</h3>
      <div>
        <label>Creditor Name:</label>
        <input type='text' name='creditorName' placeholder='Creditor'/>
      </div>
      <div>
        <label>First Name:</label>
        <input type='text' name='firstName' placeholder='First Name'/>
      </div>
      <div>
        <label>Last Name:</label>
        <input type='text' name='lastName' placeholder='Last Name'/>
      </div>
      <div>
        <label>Min Pay %:</label>
        <input type='text' name='minPaymentPercentage' placeholder='Min Pay %' step='any' min='0.00'/>
      </div>
      <div>
        <label>Balance:</label>
        <input type='text' name='balance' placeholder='Balance' step='any' min='0.00'/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RowForm;