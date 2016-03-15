import React from 'react';

const AboutMe = ({ page }) => (
  <div className="project-list">
    <div className="project">
      <h1>{page.title}</h1>
      {page.aboutMe}
    </div>
  </div>
);

// Prop Types for About Me
AboutMe.propTypes = {
  page: React.PropTypes.object.isRequired,
};

export default AboutMe;
