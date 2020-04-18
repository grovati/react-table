import React from 'react'; 

const Row = ({content, isHeader}) => {
  
  // theadRow will render the table's columns headers
  const theadRow = (
    <tr key='heading'>
        {content.map( header =>
          <th key={header} scope='col'>{header}</th>
        )}
    </tr>
  );

  // tbodyRow will render the table body rows 
  const tbodyRow = content.map( rowData =>
    <tr key={`row-${rowData.id}`}>
      <td>{rowData.creditorName}</td>
      <td>{rowData.firstName}</td>
      <td>{rowData.lastName}</td>
      <td>{rowData.minPaymentPercentage}%</td>
      <td>{rowData.balance}</td>
    </tr>
  );

  // Return header row or body rows dependeing on the is isHeader flag
  const createRow = isHeader ? theadRow : tbodyRow;

  return (createRow);
};

export default Row;