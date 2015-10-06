var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="project-list">
        <div className="project">
          <h1>{this.props.page.title}</h1>
          {this.props.page.aboutMe}
        </div>
      </div>
    )
  }
});
