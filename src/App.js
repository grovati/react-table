import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BalanceTable from './components/BalanceTable';
import RowForm from './components/RowForm';
import Header from './components/Header';


// Collect and maintain data from api call
// Use react router to create routes between table and form component
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
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <BalanceTable data={data} columns={columns} setData={setData}/>
        </Route>
        <Route exact path={'/add'}>
          <RowForm data={data} setData={setData}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
