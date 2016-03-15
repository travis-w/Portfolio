import React from 'react';

const PastEmployment = ({ employment }) => (
  <div className="project">
    <h1>Employment</h1>
    {
      employment.map((job) => (
        <div className="employment" key={job.employer}>
          <h2>
            {job.employer} <small>{job.title}</small>
            <span className="employment-date">{job.startDate} - {job.endDate}</span>
          </h2>

          {job.description}
        </div>
      ))
    }
  </div>
);

// Past Employment PropTypes
PastEmployment.propTypes = {
  employment: React.PropTypes.array,
};

export default PastEmployment;
