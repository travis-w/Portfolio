import React from 'react';

// Single Navigation Link
class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.onClick(this.props.pageId);
  }

  render() {
    return (
      <li onClick={this._onClick}>
        <span className="nav-link">{this.props.title}</span>
      </li>
    );
  }
}

// Prop Types for NavItem
NavItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  pageId: React.PropTypes.number.isRequired,
};

export default NavItem;
