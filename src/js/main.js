//Add Modules
var React = require('react');

var MyComponent = React.createClass({
  render: function(){
    return (
      <h1>{this.props.name}</h1>
    );
  }
});

React.render(<MyComponent name="Travis Weidenbenner" />, document.getElementById('container'));
