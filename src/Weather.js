import React from 'react';
import './App.css';
import WeatherDay from './WeatherDay.js';




class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let List = this.props.forecast.map((day, idx) =>(
      <WeatherDay day={this.day}/>
    ))
    return (
      <div>
       {this.props.forecast.map((day, idx) => {
          return <WeatherDay className="item" day={day} idx={idx} />
       })}
      </div>
    );
  }
}


export default Weather;
