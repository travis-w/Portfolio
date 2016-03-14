import React from 'react';
import Project from './Project.jsx';

//Display all projects
class ProjectList extends React.Component {
  render() {
    return (
      <div className="project-list">
      {
        this.props.projects.map(function(project) {
          return <Project key={project.title} project={project} />
        })
      }
      </div>
    )
  }
}
