import React from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;



class RenderImage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="header">

        <img src={this.props.img} alt={this.props.img}/>
      </div>
    );
  }
}

export default RenderImage;