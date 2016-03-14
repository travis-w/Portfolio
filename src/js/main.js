//Add Modules
import React from 'react';
import ReactDOM from 'react-dom';

import Project from './components/Project.jsx';
import ProjectList from './components/ProjectList.jsx';
import NavItem from './components/NavItem.jsx';
//var SocialMedia = require('./components/SocialMedia.jsx');
import AboutMe from './components/AboutMe.jsx';
//var SkillPanel = require('./components/SkillPanel.jsx');
import PastEmployment from './components/PastEmployment.jsx';
import Experience from './components/Experience.jsx';

//Profile Data -- Will Be stored in File eventually
var profileData = {
  name: 'Travis Weidenbenner',
  pages: [
    {
      id: 1,
      title: 'Projects',
      projects: [
        {
          title: 'Checkers',
          description: 'Python checkers game played in the console. I am ' +
                       'attempting to create the game from scratch and ' +
                       'hope to add the ability to create AIs that are able ' +
                       'to compete against each other. I am also trying to ' +
                       'strengthen my knowledge of Unit Tests with this ' +
                       'project.',
          tools: ['Python'],
          links: [
            {
              title: 'Source',
              url: 'https://github.com/travis-w/checkers'
            },
            {
              title: 'CI',
              url: 'https://travis-ci.org/travis-w/checkers'
            }
          ]
        },
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
                       'opportunities for interaction. Custom Alerts are ' +
                       'currently a work in progress so there are no ' +
                       'examples available at the moment.',
          tools: ['NodeJS', 'HTML', 'CSS', 'JavaScript'],
          links: []
        },
        {
          title: 'Twitch Plays Tetris',
          description: 'Twitch Plays Tetris is an experiment in which Tetris ' +
                       'is played by a group of viewers collaborating ' +
                       'through a livestream chat. We used JS Tetris for ' +
                       'the actual game and I created the functionality to ' +
                       'interact with the chatroom.',
         tools: ['JavaScript', 'HTML', 'CSS'],
         links: [
           {
             title: 'Link',
             url: 'http://twitch.tv/tetrisplaystwitch'
           }
         ]
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
          title: 'Link Sharing',
          description: 'A Google Chrome extension that allows multiple users ' +
                       'to share links between eachother.',
          tools: ['Javascript', 'Google Chrome API'],
          links: [
            {
              title: 'Chrome Web Store',
              url: 'https://chrome.google.com/webstore/detail/link-sharing/haehadeohhghodnfohinokocaaellnga'
            },
            {
              title: 'Source',
              url: 'https://github.com/travis-w/Link-Sharing'
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
      title: 'Experience',
      languages: ['HTML', 'CSS', 'JavaScript', 'SQL', 'PHP', 'C++', 'ASP.NET',
                  'C#', 'Python'],
      frameworks: ['Bootstrap', 'ReactJS', 'AngularJS', 'NodeJS', 'Knockout',
                    'ExpressJS', 'jQuery'],
      jobs: [
        {
          employer: 'Nucor-Yamato Steel',
          title: 'Systems Analyst Intern',
          startDate: 'May 2014',
          endDate: 'January 2015',
          description: 'Created and maintained several C#/ASP.NET ' +
                        'applications used by metallurgists and lab technicians.'
        }
      ]
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
      aboutMe: 'I am a student at Missouri University of Science and ' +
               'Technology studying computer science.  In my spare time ' +
               'I like to work on various projects and learning new concepts. ' +
               'Outside of programming, I enjoy playing and watching sports, ' +
               'playing video games, and hanging out with friends and family.'
    }
  ]
};

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
      case 2:
        contentPage = <Experience page={this.state.profileData.pages[1]} />;
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
