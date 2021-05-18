import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import RenderLocation from './RenderLocation.js';
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
    console.log('mpompmp');
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

        {/* <FetchData setLocationData={this.setLocationData}/>  */}

        {/* This line changes the value of search to whatever is currently in the text input line */}
        {/* <input onChange={(e) => this.setState({search: e.target.value})} type='text' /> */}

        {/* This button, when clicked, runs the function located in App.js that fetches the location data */}
        {/* <button onClick = {()=> this.fetchLocation(this.state.search)}> Explore! </button> */}

        {/* Render the Location Data */}
        <RenderLocation location={this.state.location.display_name} lat={this.state.location.lat} lon={this.state.location.lon}/>

      </div>
    );
  }
}

export default SearchForm;
