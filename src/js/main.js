//Add Modules
var React = require('react');

//Display A Single Project
var Project = React.createClass({
  render: function() {
    return (
      <div className="project">
        <h1>{this.props.project.title}</h1>
        {this.props.project.description}
      </div>
    )
  }
});

//Display all projects
var ProjectList = React.createClass({
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

var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      name: 'Travis Weidenbenner',
      pages: [
        {
          title: 'Projects',
          projects: [
            {
              title: 'Custom Twitch Alerts',
              description: 'I have been working with a Twitch streamer in '
                         + 'order to offer features to allow his viewers more '
                         + 'opportunities for interaction.',
              tools: ['NodeJS', 'HTML', 'CSS', 'JavaScript']
            },
            {
              title: 'Search On Twitter',
              description: 'Twitter is the best source for information on '
                         + 'current events.  Search On Twitter is a Google '
                         + 'Chrome extension that allows you to search Twitter '
                         + 'at any time. Just higlight what you want to search '
                         + 'and you will have the option to search Twitter '
                         + 'for the highlighted text in the context menu.',
              tools: ['JavaScript', 'Google Chrome API'],
              link: 'https://chrome.google.com/webstore/detail/search-on-twitter/dhpmpdpphfgejncefefmdhklfbliefkm',
              source: 'https://github.com/travis-w/Search-On-Twitter'
            },
            {
              title: 'CampusAlly',
              description: 'CampusAlly that will allow students to collaborate '
                         + 'on and share notes for classes. The development '
                         + 'has currently been put on hold while I expand my '
                         + 'knowledge of web development.',
              tools: ['PHP', 'HTML', 'CSS', 'MySQL'],
              link: 'http://campusally.com'
            }
          ]
        },
        { title: 'Experience' },
        { title: 'Social Media' },
        { title: 'About' }
      ]
    }
  },

  render: function() {
    return (
      <div className="portfolio">
        <h1>{this.state.name}</h1>
        <ul>
          {
            this.state.pages.map(function(page) {
              return <li key={page.title}>{page.title}</li>
            })
          }
        </ul>
        <ProjectList projects={this.state.pages[0].projects} />
      </div>
    )
  }
});

React.render(<Portfolio />, document.getElementById('container'));
