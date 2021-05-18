import React from 'react';
import './App.css';


class RenderLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="body">
        {/* If there is a name to display, do it. If else, display nothing. */}
        <div>{this.props.location ? <p>{this.props.location}</p> : ''}</div>
        <div>{this.props.lat ? <p>{this.props.lat}</p> : ''}</div>
        <div>{this.props.lon ? <p>{this.props.lon}</p> : ''}</div>
      </div>
    );
  }
}

export default RenderLocation;
