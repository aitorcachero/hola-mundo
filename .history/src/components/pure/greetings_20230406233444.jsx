import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 29,
    };
  }

  render() {
    return (
      <div>
        <h1>¡HOLA {this.props.name} !</h1>
        <h2>Tu edad es de: {this.state.age}</h2>
      </div>
    );
  }
}

Greetings.propTypes = {};

export default Greetings;
