import React from 'react';

// Single Navigation Link
const NavItem = ({ title, onClick }) => (
  <li onClick={onClick}>
    <span className="nav-link">{title}</span>
  </li>
);

// Prop Types for NavItem
NavItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default NavItem;
