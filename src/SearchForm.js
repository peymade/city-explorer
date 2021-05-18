import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import RenderLocation from './RenderLocation.js';
import RenderImage from './RenderImage.js';

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
      img: ''
    }
  }


  // Set state of data to be equal to whatever is passed in
  setLocationData = (data) => {
    this.setState({ data: data});
  }


  setLocation = (locationObj) => {
    this.setState({ location: locationObj }, () => console.log(this.state));
  }

  fetchLocation = async (search) => {
    let response = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${search}&format=json`);
    this.setLocation(response.data[0]);
    this.fetchImage(response.data[0]);
  }

  fetchImage = async (place) => {

    let image_url = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${place.lat},${place.lon}&zoom=8`
    this.setState({img: image_url});
  }

  render() {
    return (
      <div id="header">

      <Form>
        <Form.Group controlId="formInput">
          <Form.Label>Search For a City</Form.Label>
          <Form.Control onChange={(e) => this.setState({search: e.target.value})} type="text" placeholder="city" />
        </Form.Group>
        <Button variant="danger" onClick={()=> this.fetchLocation(this.state.search)}>
          Explore!
        </Button>
      </Form>

        {/* Render the Location Data */}
        <RenderLocation location={this.state.location.display_name} lat={this.state.location.lat} lon={this.state.location.lon} img={this.state.img}/>

        <RenderImage img={this.state.img}/>

      </div>
    );
  }
}

export default SearchForm;
