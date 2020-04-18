import React from 'react';
import styled from 'styled-components';
import Row from './Row';

const Styled = styled('div')`
  padding: 10px 20px 0 px 20px;

  table {
    border: 1px solid black;
    border-collapse: collapse;

    th,
    td {
      padding: 5px;
      border: 1px solid black;
      text-align: center;
    }
  }
`;

//Use columns and data to create the UI
const BalanceTable = ({columns, data}) => {

  return (
    <Styled>
      <table>
        <thead>
          <Row content={columns} isHeader={true}/>
        </thead>
        <tbody>
          <Row content={data} isHeader={false}/>
        </tbody>
      </table>
    </Styled>
  );
};

export default BalanceTable;
