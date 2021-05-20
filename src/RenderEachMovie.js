import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';




class RenderEachMovie extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div>
        <Card style={{ width: '400px' }}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <img
              src={this.props.src}
              alt={(this.props.title) + ' Picture'}
              title={this.props.title}
              width="90%" />
            <Card.Text>{this.props.overview}</Card.Text>
            <Card.Text>{this.props.average_votes}</Card.Text>
            <Card.Text>{this.props.total_votes}</Card.Text>
            <Card.Text>{this.props.popularity}</Card.Text>
            <Card.Text>{this.props.released_on}</Card.Text>


          </Card.Body>
        </Card>

          <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.src}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default RenderEachMovie;
