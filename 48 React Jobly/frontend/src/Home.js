import React, { useContext } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from './Hooks/UserContext';

function Home() {
  const { user } = useContext(UserContext);

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <div>
              <h1 className="font-weight-bold">JOBLY.</h1>
            </div>
          </CardTitle>
          <div>
            {user ? (
              <h3>
                Welcome, {user.firstName} {user.lastName}!
              </h3>
            ) : (
              <p>
                <Link
                  className="btn btn-primary font-weight-bold mr-3"
                  to="/login"
                >
                  Log in
                </Link>
                <Link className="btn btn-primary font-weight-bold" to="/signup">
                  Sign up
                </Link>
              </p>
            )}
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
