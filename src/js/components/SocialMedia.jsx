import React from 'react';

// Social Media Component
const SocialMedia = ({ links }) => (
  <div className="project-list">
    <div className="project">
      <h1>Social Media</h1>
      <div className="social-media">
      {
        links.map((link) => {
          const glyphClass = `social ${link.glyphicon}`;
          return (
            <a
              href={link.url}
              key={link.title}
              title={link.title}
              target="_blank"
            >
              <span className={glyphClass}></span>
            </a>
          );
        })
      }
      </div>
    </div>
  </div>
);

// Prop Types for SocialMedia
SocialMedia.propTypes = {
  links: React.PropTypes.array.isRequired,
};

export default SocialMedia;
