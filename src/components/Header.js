import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Header will be a nav bar to toggle between RowForm and BalanceTable component
const Header = () => {
    
  return (
    <div>
      <nav>
        <Link to='/'>Balance Table</Link>
      </nav>
    </div>
  );
};

export default Header;