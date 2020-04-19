import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const TableLink = styled(Link)`
  padding: 10px 20px;
  color: black;
  line-height: 30px;
  margin: 0px 4px;
`;
// Header will be a nav bar to toggle between RowForm and BalanceTable component
const Header = () => {
    
  return (
    <div>
      <nav>
        <TableLink to='/'>Balance Table</TableLink>
      </nav>
    </div>
  );
};

export default Header;