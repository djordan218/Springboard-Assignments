import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, ListGroup } from 'reactstrap';
import JoblyAPI from '../JoblyAPI';
import SearchForm from '../SearchForm';
import './Companies.css';
import Company from './Company';

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
    console.debug('Getting companies...');
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyAPI.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <h1>Loading...</h1>;

  return (
    <section className="col-md-8">
      <Card className="my-2 Companies-card" color="dark" outline>
        <CardBody className="text-center">
          <CardTitle>
            <div className="font-weight-bold Company-title">
              Looking for some companies?
            </div>
          </CardTitle>
          <SearchForm search={search} />
          <ListGroup>
            {companies.map((c) => (
              <Company key={c.handle} company={c} />
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Companies;
