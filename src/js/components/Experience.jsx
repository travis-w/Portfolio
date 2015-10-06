var React = require('react');
var SkillPanel = require('./SkillPanel.jsx');
var PastEmployment = require('./PastEmployment.jsx');

//Experience page
module.exports = React.createClass({
  render: function() {
    return (
      <div className="project-list">
        <SkillPanel title="Programming Languages" skillList={this.props.page.languages} />
        <SkillPanel title="Libraries/Frameworks" skillList={this.props.page.frameworks} />
        <PastEmployment employment={this.props.page.jobs} />
      </div>
    )
  }
});
