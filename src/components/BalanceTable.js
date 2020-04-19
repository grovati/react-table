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
`;

//Use columns and data to create the UI
const BalanceTable = ({columns, data, setData}) => {

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
    </Styled>
  );
};

export default BalanceTable;
