import React from 'react';
import './App.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="head">
        <h1>Welcome to Peyton's City Explorer</h1>
      </div>
    );
  }
}

export default Header;
