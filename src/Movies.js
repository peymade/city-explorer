import React from 'react';
import './App.css';
import RenderEachMovie from './RenderEachMovie.js';
import Carousel from 'react-bootstrap/Carousel';



class Movies extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Carousel id="carousel">
          {this.props.movies.map((movie, idx) => {
            return <Carousel.Item className="item">
              <img
                className="d-block w-100"
                src={movie.image_url}
                alt={`Sorry, there is no poster for '${movie.title}'`}
              />
              <Carousel.Caption className="caption">
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
                <p>Average Votes: {movie.average_votes}</p>
                <p>Total Votes: {movie.total_votes}</p>
                <p>Popularity: {movie.popularity}</p>
                <p>Release Date: {movie.released_on}</p>
              </Carousel.Caption>
            </Carousel.Item>
          })}
        </Carousel>
        {/* 
      <Carousel id="carousel">  
        {this.props.movies.map((movie, idx) => {
          console.log(movie);
          return (<RenderEachMovie 
          keyReact={idx}
          title={movie.title} 
          overview={movie.overview}
          src={movie.image_url}
          average_votes={movie.average_votes}
          total_votes={movie.total_votes}
          popularity={movie.popularity}
          released_on={movie.released_on}
          />
        )
        })}
      </Carousel> */}

      </div>
    );
  }
}

export default Movies;
