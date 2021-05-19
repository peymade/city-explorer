import React from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Overlay from 'react-bootstrap/Overlay';



class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Alert variant="danger" show={this.props.showError}>{this.props.error}</Alert>
        <p>{this.props.buttonId}</p>
        {/* <Overlay target={this.props.id} show={this.props.show} placement="right"></Overlay> */}
      </div>
    );
  }
}


export default Error;
