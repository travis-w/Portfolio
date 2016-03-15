import React from 'react';

// Skills Component
const SkillPanel = ({ title, skillList }) => (
  <div className="project">
    <h1>{title}</h1>
    {
      skillList.map((skill) => (
        <span key={skill} className="skill">{skill}</span>
      ))
    }
  </div>
);

// Prop Types for SkillPanel
SkillPanel.propTypes = {
  title: React.PropTypes.string.isRequired,
  skillList: React.PropTypes.array.isRequired,
};

export default SkillPanel;
