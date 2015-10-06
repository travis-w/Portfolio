var React = require('react');

//Skills Component
module.exports = React.createClass({
  render: function() {
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
});
