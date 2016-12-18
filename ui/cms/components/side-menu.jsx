
require('./side-menu.css');

import React from 'react';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {}
  }
  
  render() {
    return (
      <div className="side-menu">
        {this.props.children}
      </div>
    )
  }
}

export default SideMenu
