import React from 'react';

//Single Navigation Link
class NavItem extends React.Component {
  render() {
    return (
      <li onClick={this.props.onClick}>
        <span className="nav-link">{this.props.title}</span>
      </li>
    )
  }
}
