import React from 'react';
import SkillPanel from './SkillPanel.jsx';
import PastEmployment from './PastEmployment.jsx';

//Experience page
class Experience extends React.Component {
  render() {
    return (
      <div className="project-list">
        <SkillPanel title="Programming Languages" skillList={this.props.page.languages} />
        <SkillPanel title="Libraries/Frameworks" skillList={this.props.page.frameworks} />
        <PastEmployment employment={this.props.page.jobs} />
      </div>
    )
  }
}
