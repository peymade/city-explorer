import React from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';



class WeatherDay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <ListGroup.Item className="list" key={this.props.idx}>{`${this.props.day}`}</ListGroup.Item>
      </div>
    );
  }
}


export default WeatherDay;
