import React from 'react';
import { Link } from 'react-router-dom';

function Sardines() {
  return (
    <div>
      <h1>Sardines</h1>
      <Link exact to="/">
        Go Back
      </Link>
    </div>
  );
}

export default Sardines;
