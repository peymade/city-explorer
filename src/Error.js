import React from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';



class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Alert variant="danger" show={this.props.showError}>{this.props.error}</Alert>
      </div>
    );
  }
}


export default Error;
