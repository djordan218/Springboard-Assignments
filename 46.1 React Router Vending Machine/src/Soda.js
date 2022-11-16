import React from 'react';
import { Link } from 'react-router-dom';

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <Link exact to="/">
        Go Back
      </Link>
    </div>
  );
}

export default Soda;
