import React from 'react';
import styled from 'styled-components';
import Row from './Row';

const Styled = styled('div')`
`;

//Use columns and data to create the UI
const BalanceTable = ({columns, data}) => {

  return (
    <>
      <table>
        <thead>
          <Row content={columns} isHeader={true}/>
        </thead>
        <tbody>
          <Row content={data} isHeader={false}/>
        </tbody>
      </table>
    </>
  );
};

export default BalanceTable;
