import React from 'react';

class PastEmployment extends React.Component {
  render() {
    return (
      <div className="project">
        <h1>Employment</h1>
        {
          this.props.employment.map(function(job) {
            return (
              <div className="employment" key={job.employer}>
                <h2>
                  {job.employer} <small>{job.title}</small>
                  <span className="employment-date">{job.startDate} - {job.endDate}</span>
                </h2>

                {job.description}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default PastEmployment;
