import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="project-list">
        <div className="project">
          <h1>{this.props.page.title}</h1>
          {this.props.page.aboutMe}
        </div>
      </div>
    )
  }
}
