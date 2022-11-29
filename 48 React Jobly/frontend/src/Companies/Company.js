import React, { useState, useEffect } from 'react';
import { ListGroupItem, Button, ListGroup } from 'reactstrap';
import JoblyAPI from '../JoblyAPI';
import './Company.css';

function Company({ company }) {
  const [showResults, setShowResults] = useState(false);
  const [showJobs, setShowJobs] = useState(false);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    async function getCompanyDetails() {
      let companyDetails = await JoblyAPI.getCompany(company.handle);
      setDetails(companyDetails.company);
    }
    getCompanyDetails();
  }, [company.handle]);
  const jobs = details.jobs;

  const handleDetails = () => {
    setShowResults((prevShowResults) => !prevShowResults);
  };
  const handleJobDetails = () => {
    setShowJobs((prevShowResults) => !prevShowResults);
  };

  return (
    <>
      <ListGroupItem key={company.handle}>
        <h5>{company.name}</h5>
        <p>{company.description}</p>
        <Button onClick={handleDetails}>
          {!showResults ? 'Show details.' : 'Hide details.'}
        </Button>
        {showResults ? (
          <div>
            <h6>Number of Employees: {details.numEmployees}</h6>
            <h6>
              Number of Jobs: {details.jobs.length}
              <Button
                onClick={handleJobDetails}
                size="sm"
                className="company-jobs-btn"
              >
                {!showJobs ? 'Show jobs.' : 'Hide jobs.'}
              </Button>
              <div>
                {showJobs ? (
                  <ListGroup flush>
                    {jobs.map((j) => (
                      <ListGroupItem key={j.id} className="job-list">
                        Title: {j.title}, Salary: {j.salary || 'Not provided.'}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                ) : null}
              </div>
            </h6>
          </div>
        ) : null}
      </ListGroupItem>
    </>
  );
}

export default Company;
