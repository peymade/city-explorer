import React from 'react';
import './App.css';
import Header from './Header.js';
import SearchForm from './SearchForm.js';
// import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      location: {},
      search: '',
    }
  }


  render() {
    return (
      <div className="App">
      <Header />
      <SearchForm />
    </div>
    );
  }
}


export default App;
