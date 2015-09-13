//Add Modules
var React = require('react');

var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      name: 'Travis Weidenbenner',
      pages: ['Projects', 'Experience', 'Social Media', 'About']
    }
  },

  render: function() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <ul>
          {
            this.state.pages.map(function(page) {
              return <li>{page}</li>
            })
          }
        </ul>
      </div>
    )
  }
});

React.render(<Portfolio />, document.getElementById('container'));
