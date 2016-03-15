import React from 'react';
import SkillPanel from './SkillPanel.jsx';
import PastEmployment from './PastEmployment.jsx';

// Experience page
const Experience = ({ page }) => (
  <div className="project-list">
    <SkillPanel title="Programming Languages" skillList={page.languages} />
    <SkillPanel title="Libraries/Frameworks" skillList={page.frameworks} />
    <PastEmployment employment={page.jobs} />
  </div>
);

Experience.propTypes = {
  page: React.PropTypes.object.isRequired,
};

export default Experience;
