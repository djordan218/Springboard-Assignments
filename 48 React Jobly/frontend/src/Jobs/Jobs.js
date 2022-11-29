import React, { useState, useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle, ListGroup } from 'reactstrap';
import JoblyAPI from '../JoblyAPI';
import './Jobs.css';
import Job from './Job';
import SearchForm from '../SearchForm';
import UserContext from '../Hooks/UserContext';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(UserContext);
  const apps = user.applications;

  useEffect(function getJobsOnMount() {
    console.debug('Getting jobs...');
    search();
  }, []);

  async function search(name) {
    let jobs = await JoblyAPI.getJobs(name);
    setJobs(jobs);
  }

  if (!jobs) return <h1>Loading...</h1>;

  return (
    <section className="col-md-8">
      <Card className="my-2 Jobs-card" color="dark" outline>
        <CardBody className="text-center">
          <CardTitle>
            <div className="font-weight-bold Job-title">
              Looking for some jobs?
            </div>
          </CardTitle>
          <SearchForm search={search} />
          <ListGroup className="jobs-list">
            {jobs.map((j) => (
              <Job job={j} key={j.id} apps={apps} />
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Jobs;
