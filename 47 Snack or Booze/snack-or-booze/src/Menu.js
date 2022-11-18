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

function Menu({ items, title }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">Menu</CardTitle>
          <CardText>Take a look at our delicious {title}!</CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${title}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
        <Link className="font-weight-bold text-center" to={'/additem'}>
          Add an item!
        </Link>
      </Card>
    </section>
  );
}

export default Menu;
