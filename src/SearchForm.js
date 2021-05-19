import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import RenderLocation from './RenderLocation.js';
import RenderImage from './RenderImage.js';
import Error from './Error.js';
import Weather from './Weather.js';


import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const API_KEY = process.env.REACT_APP_API_KEY;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      location: {},
      img: '',
      error: undefined,
      showError: false,
      id: 'error message',
      buttonId: '',
      forecast: [],
    }
  }

  // Take what was submitted and make the request to axios
  fetchLocation = (event) => {

    this.setState({buttonId: event.target.id})

    let searchFun = this.state.search
    let response = axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${searchFun}&format=json`)

    // set Location state, run function to make image URL, set error to no error, and set error show to false
    .then(response => {
      let location = response.data[0];
      this.setState({location: location});
      this.fetchImage(response.data[0]);
      this.getWeather(response.data[0]);
      this.setState({error: ''});
      this.setState({showError: false})
      
    })

    // if there is an error, put it in state as a string, and set error show to be true
    .catch(error => this.setState({error: error.toString()}, this.setState({showError: true}), console.log(this.state.showError)));

  console.log(response);
}

  // Take in the place object from axios and use the lat and lon to create an image URL
  fetchImage = async (place) => {

    let image_url = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${place.lat},${place.lon}&zoom=8`
    this.setState({img: image_url});
  }


  getWeather = (place) => {

    console.log(place.lat);
    let forecastArray = [];

    let response = axios.get(`http://localhost:3030/weather?lat=${place.lat}&lon=${place.lon}&searchQuery=${place.display_name}`)


    .then(response => {

      // Iterate through the data and for each object, access the data and description, add it to a new array
      for(let i=0; i<16; i++){
        forecastArray.push(`${response.data[0].date}: ${response.data[i].description}`)
      };

      this.setState({forecast: forecastArray});
      this.setState({error: ''});
      this.setState({showError: false});
    
    })
    // if there is an error, put it in state as a string, and set error show to be true
    .catch(error => this.setState({error: error.toString()}, this.setState({showError: true}), console.log(this.state.showError)));

  console.log(response);
}


  render() {
    return (
      <div id="header">

      <Error error={this.state.error} showError={this.state.showError} id={this.state.id} buttonId={this.state.buttonId}/>

      <Form>
        <Form.Group controlId="formInput">
          <Form.Label>Search For a City</Form.Label>
          <Form.Control onChange={(e) => this.setState({search: e.target.value})} type="text" placeholder="city" />
        </Form.Group>
        <Button variant="danger" id="here" onClick={this.fetchLocation}>
          Explore!
        </Button>

      </Form>

        {/* Render the Location Data */}
        <RenderLocation location={this.state.location.display_name} lat={this.state.location.lat} lon={this.state.location.lon} img={this.state.img}/>

        <RenderImage img={this.state.img}/>

        <Weather forecast={this.state.forecast}/>

      </div>
    );
  }
}

export default SearchForm;
