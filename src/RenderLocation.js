import React from 'react';
import './App.css';


class RenderLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="header">
        {/* If there is a name to display, do it. If else, display nothing. */}
        <div>{this.props.location ? <p>{this.props.location}</p> : ''}</div>
        <p>{console.log('yeee')}</p>
        <p>Latitude: {this.props.lat}</p>
        <p>Longitude: {this.props.lon}</p>
      </div>
    );
  }
}

export default RenderLocation;
