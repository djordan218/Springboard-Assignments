import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <h5>Number of Snacks: {snacks.length}</h5>
            <h5>Number of Drinks: {drinks.length}</h5>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
