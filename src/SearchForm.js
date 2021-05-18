import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import RenderLocation from './RenderLocation.js';
import RenderImage from './RenderImage.js';
import Error from './Error.js';


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
      show: false,
      id: 'here'
    }
  }


  // Set state of data to be equal to whatever is passed in
  setLocationData = (data) => {
    this.setState({ data: data});
  }


  setLocation = (locationObj) => {
    this.setState({ location: locationObj }, () => console.log(this.state));
  }


  fetchLocation = (search) => {

    let response = axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${search}&format=json`)

    .then(response => {
      this.setLocation(response.data[0]);
      this.fetchImage(response.data[0]);
      this.setState({error: ''});
      this.setState({show: false})
      
    })
    .catch(error => this.setState({error: error.toString()}, this.setState({show: true}), console.log(this.state.show)));

  console.log(response);
}




  fetchImage = async (place) => {

    let image_url = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${place.lat},${place.lon}&zoom=8`
    this.setState({img: image_url});
  }

  render() {
    return (
      <div id="header">

<Error error={this.state.error} show={this.state.show} id={this.state.id}/>


      <Form>
        <Form.Group controlId="formInput">
          <Form.Label>Search For a City</Form.Label>
          <Form.Control onChange={(e) => this.setState({search: e.target.value})} type="text" placeholder="city" />
        </Form.Group>
        <Button variant="danger" id="here" onClick={()=> this.fetchLocation(this.state.search)}>
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
