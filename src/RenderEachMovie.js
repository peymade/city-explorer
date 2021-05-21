import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';




class RenderEachMovie extends React.Component {

  render() {

    return (
        <Carousel.Item className="item" key={this.props.keyReact}>
          <img
          className="d-block w-100"
          src='https://unsplash.com/photos/YBJqVEYlLqw'
          alt={`Sorry, there is no poster for '${this.props.title}'`}
          />
          <Carousel.Caption className="caption">
            <h4>{this.props.title}</h4>
          </Carousel.Caption>
        </Carousel.Item>

        // <Carousel.Item className="item" key={this.props.keyReact}>
        //     <img
        //       className="d-block w-100"
        //       src='https://unsplash.com/photos/YBJqVEYlLqw'
        //       alt={`Sorry, there is no poster for '${this.props.title}'`}
        //     />
        //     <Carousel.Caption className="caption">
        //       <h4>{this.props.title}</h4>
        //       {/* <p>{this.props.overview}</p>
        //       <p>Average Votes: {this.props.average_votes}</p>
        //       <p>Total Votes: {this.props.total_votes}</p>
        //       <p>Popularity: {this.props.popularity}</p>
        //       <p>Release Date: {this.props.released_on}</p> */}
        //     </Carousel.Caption>
        // </Carousel.Item>
    );
  }
}

export default RenderEachMovie;
