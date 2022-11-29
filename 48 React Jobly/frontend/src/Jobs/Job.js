import React, { useState, useContext } from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import './Job.css';
import UserContext from '../Hooks/UserContext';
import JoblyAPI from '../JoblyAPI';

function Job({ job, apps }) {
  const [showResults, setShowResults] = useState(false);
  const { user } = useContext(UserContext);

  async function handleApply(evt) {
    evt.currentTarget.disabled = true;
    await JoblyAPI.applyToJob(user.username, job.id);
  }

  const handleDetails = () => {
    setShowResults((prevShowResults) => !prevShowResults);
  };

  return (
    <section className="col-md-8">
      <ListGroupItem>
        <h5>{job.title}</h5>
        <Button size="sm" className="job-btn" onClick={handleDetails}>
          {!showResults ? 'Show details.' : 'Hide details.'}
        </Button>
        <Button
          size="sm"
          className="apply-btn"
          onClick={handleApply}
          disabled={apps.includes(job.id)}
        >
          Apply
        </Button>
        {showResults ? (
          <div>
            <h6>Salary: {job.salary || 'Not provided'}</h6>
            <h6>Company: {job.companyName}</h6>
            <h6>Equity: {job.equity || 'Not provided.'}</h6>
          </div>
        ) : null}
      </ListGroupItem>
    </section>
  );
}

export default Job;
