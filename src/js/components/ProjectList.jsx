import React from 'react';
import Project from './Project.jsx';

// Display all projects
const ProjectList = ({ projects }) => (
  <div className="project-list">
  {
    projects.map((project) => (
      <Project key={project.title} project={project} />
    ))
  }
  </div>
);

// Prop Types for Project List
ProjectList.propTypes = {
  projects: React.PropTypes.array.isRequired,
};

export default ProjectList;
