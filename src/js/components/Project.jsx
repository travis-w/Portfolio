import React from 'react';

// Display A Single Project
const Project = ({ project }) => (
  <div className="project">
    <h1>{project.title}</h1>
    {project.description}
    <ul className="project-links">
    {
      project.links.map((link) => (
        <li key={link.title}>
          <a
            href={link.url}
            key={link.title}
            target="_blank"
          >
            {link.title}
          </a>
        </li>
      ))
    }
    </ul>
  </div>
);

// Prop Types for Project
Project.propTypes = {
  project: React.PropTypes.object.isRequired,
};

export default Project;
