// Import SCSS for webpack to convert to css and include
import '../scss/main.scss';

// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Components
import Project from './components/Project.jsx';
import ProjectList from './components/ProjectList.jsx';
import NavItem from './components/NavItem.jsx';
import SocialMedia from './components/SocialMedia.jsx';
import AboutMe from './components/AboutMe.jsx';
import SkillPanel from './components/SkillPanel.jsx';
import PastEmployment from './components/PastEmployment.jsx';
import Experience from './components/Experience.jsx';

// Load profile data
import profileData from './data.json';

//Main Component
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      profileData: profileData,
      page: 0
    }
  }

  changePage(pageId) {
    //Set pageId to zero if same as current page id (to hide current page)
    if (pageId === this.state.page) {
      pageId = 0;
    }

    this.setState({
      profileData: profileData,
      page: pageId
    });
  }

  render() {
    //Determine which component to render
    let navigation = this.state.profileData.pages.map((page) => {
      return <NavItem title={page.title} key={page.title} onClick={this.changePage.bind(this, page.id)}/>
    });

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
          {navigation}
        </ul>
        {contentPage}
      </div>
    )
  }
}

//Render portfolio
ReactDOM.render(<Portfolio />, document.getElementById('container'));
