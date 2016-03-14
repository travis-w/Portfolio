import React from 'react';

//Display A Single Project
class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <h1>{this.props.project.title}</h1>
        {this.props.project.description}
        <ul className="project-links">
        {
          this.props.project.links.map((link) => {
            return <li key={link.title}><a href={link.url} key={link.title} target="_blank">{link.title}</a></li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default Project;
