import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

function MenuItem({ items, cantFind }) {
  const { id } = useParams();

  let snack = items.find((snack) => snack.id === id);
  let drink = items.find((drink) => drink.id === id);
  if (!snack) return <Redirect to={cantFind} />;
  if (!drink) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name || drink.name}
          </CardTitle>
          <CardText className="font-italic">
            {snack.description || drink.description}
          </CardText>
          <p>
            <b>Recipe:</b> {snack.recipe || drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve || drink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;
