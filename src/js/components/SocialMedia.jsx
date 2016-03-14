import React from 'react';

//Social Media Component
class SocialMedia extends React.Component {
  render() {
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
}
