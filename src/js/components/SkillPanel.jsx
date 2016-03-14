import React from 'react';

//Skills Component
class SkillPanel extends React.Component {
  render() {
    return (
      <div className="project">
        <h1>{this.props.title}</h1>
        {
          this.props.skillList.map(function(skill) {
            return <span key={skill} className="skill">{skill}</span>
          })
        }
      </div>
    )
  }
}
