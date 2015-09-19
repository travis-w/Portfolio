//Add Modules
var React = require('react/addons');

//Profile Data -- Will Be stored in File eventually
var profileData = {
  name: 'Travis Weidenbenner',
  pages: [
    {
      id: 1,
      title: 'Projects',
      projects: [
        {
          title: 'Portfolio',
          description: 'In order to learn ReactJS and become comfortable ' +
                       'with build tools like Gulp and Browserify, I ' +
                       'decided to re-create my portfolio and move away ' +
                       'from WordPress.',
          tools: ['NodeJS', 'ReactJS', 'Browserify', 'Gulp', 'HTML', 'SASS'],
          links: [
            {
              title: 'Link',
              url: 'http://thetravisw.com'
            },
            {
              title: 'Source',
              url: 'http://github.com/travis-w/Portfolio'
            }
          ]
        },
        {
          title: 'Custom Twitch Alerts',
          description: 'I have been working with a Twitch streamer in ' +
                       'order to offer features to allow his viewers more ' +
                       'opportunities for interaction.',
          tools: ['NodeJS', 'HTML', 'CSS', 'JavaScript'],
          links: []
        },
        {
          title: 'Search On Twitter',
          description: 'Twitter is the best source for information on ' +
                       'current events.  Search On Twitter is a Google ' +
                       'Chrome extension that allows you to search Twitter ' +
                       'at any time. Just higlight what you want to search ' +
                       'and you will have the option to search Twitter ' +
                       'for the highlighted text in the context menu.',
          tools: ['JavaScript', 'Google Chrome API'],
          links: [
            {
              title: 'Chrome Web Store',
              url: 'https://chrome.google.com/webstore/detail/search-on-twitter/dhpmpdpphfgejncefefmdhklfbliefkm'
            },
            {
              title: 'Source',
              url: 'https://github.com/travis-w/Search-On-Twitter'
            }
          ]
        },
        {
          title: 'CampusAlly',
          description: 'CampusAlly that will allow students to collaborate ' +
                       'on and share notes for classes. The development ' +
                       'has currently been put on hold while I expand my ' +
                       'knowledge of web development.',
          tools: ['PHP', 'HTML', 'CSS', 'MySQL'],
          links: [
            {
              title: 'Link',
              url: 'http://campusally.com'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Experience'
    },
    {
      id: 3,
      title: 'Social Media',
      links: [
        {
          title: 'Twitter',
          url: 'http://twitter.com/tweidenbenner',
          glyphicon: 'social-twitter'
        },
        {
          title: 'GitHub',
          url: 'http://github.com/travis-w',
          glyphicon: 'social-github'
        },
        {
          title: 'Facebook',
          url: 'https://www.facebook.com/travis.weidenbenner',
          glyphicon: 'social-facebook'
        },
        {
          title: 'Email',
          url: 'mailto:travis@thetravisw.com',
          glyphicon: 'social-e-mail'
        }
      ]
    },
    {
      id: 4,
      title: 'About',
      aboutMe: 'About Me'
    }
  ]
};

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

//Display A Single Project
var Project = React.createClass({
  render: function() {
    return (
      <div className="project">
        <h1>{this.props.project.title}</h1>
        {this.props.project.description}
        <ul className="project-links">
        {
          this.props.project.links.map(function(link) {
            return <li><a href={link.url} key={link.title}>{link.title}</a></li>
          })
        }
        </ul>
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

//Single Navigation Link
var NavItem = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.onClick}>
        <span className="nav-link">{this.props.title}</span>
      </li>
    )
  }
});

//Social Media Component
var SocialMedia = React.createClass({
  render: function() {
    return (
      <div className="project-list">
        <div className="project">
          <h1>Social Media</h1>
          <div className="social-media">
          {
            this.props.links.map(function(link) {
              var glyphClass = "social " + link.glyphicon;
              return <a href={link.url} key={link.title} title={link.title} target="_blank"><span className={glyphClass}></span></a>
            })
          }
          </div>
        </div>
      </div>
    )
  }
});

var AboutMe = React.createClass({
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

//Main Component
var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      profileData: profileData,
      page: 0
    }
  },

  changePage: function(pageId) {
    //Set pageId to zero if same as current page id (to hide current page)
    if (pageId === this.state.page) {
      pageId = 0;
    }

    this.setState({
      profileData: profileData,
      page: pageId
    });
  },

  render: function() {
    //Determine which component to render
    var contentPage;
    switch (this.state.page) {
      case 0:
        contentPage = '';
        break;
      case 1:
        contentPage = <ProjectList projects={this.state.profileData.pages[0].projects} />;
        break;
      case 3:
        contentPage = <SocialMedia links={this.state.profileData.pages[2].links} />;
        break;
      case 4:
        contentPage = <AboutMe page={this.state.profileData.pages[3]} />;
        break;
    }
    return (
      <div className="portfolio">
        <div className="logo"></div>
        <ul className="navigation">
          {
            //Loop through pages and create a nav link for each
            this.state.profileData.pages.map(function(page) {
              return <NavItem title={page.title} key={page.title} onClick={this.changePage.bind(this, page.id)}/>
            }, this)
          }
        </ul>
        {contentPage}
      </div>
    )
  }
});

//Render portfolio
React.render(<Portfolio />, document.getElementById('container'));
