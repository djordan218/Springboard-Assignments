import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <p>What would you like to eat?</p>

      <BrowserRouter>
        <h1>
          <Link exact to="/soda">
            Soda
          </Link>
        </h1>
        <h1>
          <Link exact to="/chips">
            Chips
          </Link>
        </h1>
        <h1>
          <Link exact to="/sardines">
            Sardines
          </Link>
        </h1>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
