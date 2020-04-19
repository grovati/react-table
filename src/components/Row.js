import React from 'react'; 

const Row = ({content, data, setData, isHeader}) => {
  // Format the balance column cells to represent currency
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  
  // theadRow will render the table's columns headers
  // Creates a checkbox that will select and deselect all of table body rows
  const theadRow = (
    <tr key='heading'>
      <th scope='col'>
        <input type='checkbox' onChange={ e => {
          let checked = e.target.checked;

          setData( data.map( ele => {
            ele.select = checked;

            return ele;
          }));
        }}/>
      </th>
      {content.map( header =>
        <th key={header} scope='col'>{header}</th>
      )}
    </tr>
  );

  // tbodyRow will render the table body rows 
  // Checkbox cell should track changes in its checked attribute by checking the select property in each row data
  const tbodyRow = content.map( (rowData, index) =>
    <tr key={`row-${rowData.id || 'i' + index}`}>
      <td>
        <input type='checkbox' checked={rowData.select} onChange={ e => {
          let checked = e.target.checked;

          setData( content.map( ele => {
            if(rowData.id === ele.id) ele.select = checked;

            return ele;
          }));
        }}/>
      </td>
      <td>{rowData.creditorName}</td>
      <td>{rowData.firstName}</td>
      <td>{rowData.lastName}</td>
      <td>{rowData.minPaymentPercentage}%</td>
      <td>{formatter.format(rowData.balance)}</td>
    </tr>
  );

  // Set variable equal to header row or body rows depending on the isHeader flag value
  const createRow = isHeader ? theadRow : tbodyRow;

  return (createRow);
};

export default Row;