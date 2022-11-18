import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import SnackOrBoozeApi from './Api';
import { Route, Switch } from 'react-router-dom';
import MenuItem from './MenuItem';
import Menu from './Menu';
import FourOhFour from './FourOhFour';
import AddItemForm from './AddItemForm';

function Routes() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getMenu() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getMenu();
  }, []);

  if (isLoading) {
    return <h1 className="loading">Loading &hellip;</h1>;
  }

  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
          </Route>
          <Route exact path="/snacks">
            <Menu items={snacks} title="snacks" />
          </Route>
          <Route path="/snacks/:id">
            <MenuItem items={snacks} cantFind="/snacks" />
          </Route>
          <Route exact path="/drinks">
            <Menu items={drinks} title="drinks" />
          </Route>
          <Route path="/drinks/:id">
            <MenuItem items={drinks} cantFind="/drinks" />
          </Route>
          <Route path="/additem">
            <AddItemForm />
          </Route>
          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default Routes;
