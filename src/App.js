import React, {useState, useEffect} from 'react';
import BalanceTable from './components/BalanceTable';

// Collect and maintain data from api call
function App() {
  const [data, setData] = useState([]);
  const columns = ['Creditor', 'First Name', 'Last Name', 'Min Pay %', 'Balance'];

  useEffect( () => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json');
      const data = await response.json();

      // Add a select property to all of the elements returned from API response
      // Select will determine the status of the checked attribute in the row checkbox
      setData( data.map(ele => {
        return { select: false, ...ele};
      }));
    };

    fetchData();
  }, []);

  return (
    <div>
      <BalanceTable data={data} columns={columns} setData={setData}/>
    </div>
  );
}

export default App;
