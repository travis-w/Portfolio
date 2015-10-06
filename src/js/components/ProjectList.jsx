var React = require('react');
var Project = require('./Project.jsx');

//Display all projects
module.exports = React.createClass({
  render: function() {
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
});
