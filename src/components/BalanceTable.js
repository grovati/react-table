import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Row from './Row';

const Styled = styled('div')`
  padding: 10px 20px 0px;

  table {
    border: 1px solid black;
    border-collapse: collapse;

    th,
    td {
      padding: 5px;
      border: 1px solid black;
      text-align: center;
    };
  };

  button {
    padding: 5px 20px;
    margin: 5px 1px;
    color: white;
    background-color: #008CBA;
    border-radius: 8px;
    cursor: pointer;
  };

  section {
    width: 350px;
    display: flex;
    justify-content: space-between;

    p {
      margin: 5px;
    };
  };
`;

// Use columns and data to create the UI
const BalanceTable = ({columns, data, setData}) => {
  // Maintain count of rows that have been selected and their balance sum
  let selectCount = 0;
  let selectBalance = 0;

  // Iterate through my data and collect balance from selected rows
  data.forEach(({select, balance}) => {
    if(select === true) {
      selectCount += 1;

      if( typeof balance === 'string') selectBalance += Number(balance);
      else selectBalance += balance;
    };
  });

  // Delete any selected rows on click of button
  // by creating new array that will set my state
  const deleteHanlde = () => {
    const newData = [];

    data.forEach( ele => {
      if(ele.select === false) newData.push(ele);
    });

    setData(newData);
  };

  return (
    <Styled>
      <table>
        <thead>
          <Row content={columns} data={data} setData={setData} isHeader={true}/>
        </thead>
        <tbody>
          <Row content={data} setData={setData} isHeader={false}/>
        </tbody>
      </table>
      <Link to='/add'>
        <button>Add Debt</button>
      </Link>
      <button onClick={deleteHanlde}>Delete Debt</button>
      <section style={{width: '505px', backgroundColor: '#00CED1'}}>
        <p>Total:</p>
        <p>${selectBalance}</p>
      </section>
      <section>
        <p>Total Row Count: {data.length}</p>
        <p>Total Rows Selected: {selectCount}</p>
      </section>
    </Styled>
  );
};

export default BalanceTable;
