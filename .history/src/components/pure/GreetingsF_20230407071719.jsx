import React from 'react';
import PropTypes from 'prop-types';

const GreetingsF = () => {
  return (
    <div>
      <h1>¡HOLA {this.props.name} !</h1>
      <h2>Tu edad es de: {this.state.age}</h2>
      <button onClick={this.birthday}>Cumplir años</button>
    </div>
  );
};

GreetingsF.propTypes = {};

export default GreetingsF;
