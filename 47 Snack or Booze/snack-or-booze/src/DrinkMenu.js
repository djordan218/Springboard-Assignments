import React from 'react';
import { Link } from 'react-router-dom';
import './FoodMenu.css';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

function DrinkMenu({ drinks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Drink Menu
          </CardTitle>
          <CardText>Here are our tasty drinks!</CardText>
          <ListGroup>
            {drinks.map((drink) => (
              <Link to={`/drinks/${drink.id}`} key={drink.id}>
                <ListGroupItem>{drink.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkMenu;
