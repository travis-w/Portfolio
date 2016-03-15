// Import SCSS for webpack to convert to css and include
import '../scss/main.scss';

// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Components
import ProjectList from './components/ProjectList.jsx';
import NavItem from './components/NavItem.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import AboutMe from './components/AboutMe.jsx';
import Experience from './components/Experience.jsx';

// Load profile data
import profileData from './data.json';

// Main Component
class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      profileData,
      page: 0,
    };

    this._changePage = this._changePage.bind(this);
  }

  _changePage(pageId) {
    let nextPage = pageId;

    // Set pageId to zero if same as current page id (to hide current page)
    if (nextPage === this.state.page) {
      nextPage = 0;
    }

    this.setState({
      profileData,
      page: nextPage,
    });
  }

  render() {
    // Determine which component to render
    const navigation = this.state.profileData.pages.map((page) => (
      <NavItem
        title={page.title}
        key={page.title}
        onClick={this._changePage}
        pageId={page.id}
      />
    ));

    let contentPage;
    switch (this.state.page) {
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
      default:
        contentPage = '';
        break;
    }

    return (
      <div className="portfolio">
        <div className="logo"></div>
        <ul className="navigation">
          {navigation}
        </ul>
        {contentPage}
      </div>
    );
  }
}

// Render portfolio
ReactDOM.render(<Portfolio />, document.getElementById('container'));
