import React from 'react';
import PropTypes from 'prop-types';

const GreetingsF = (props) => {
  return (
    <div>
      <h1>¡HOLA {props.name} desde componente funcional!</h1>
      {/* <h2>Tu edad es de: {this.state.age}</h2>
      <button onClick={this.birthday}>Cumplir años</button> */}
    </div>
  );
};

GreetingsF.propTypes = {
  name: PropTypes.string,
};

export default GreetingsF;
