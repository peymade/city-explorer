import React from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';



class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


    let List = this.props.forecast.map((day, idx) =>(
      <ListGroup.Item className="list" key={idx}>{`${day}`}</ListGroup.Item>
    ))
    return (
      <div>
        <ListGroup>{List}</ListGroup>
      </div>
    );
  }
}


export default Weather;
