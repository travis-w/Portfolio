var React = require('react');

//Single Navigation Link
module.exports = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.onClick}>
        <span className="nav-link">{this.props.title}</span>
      </li>
    )
  }
});
