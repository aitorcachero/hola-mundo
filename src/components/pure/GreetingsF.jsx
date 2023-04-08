import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GreetingsF = (props) => {
  const [age, setage] = useState(29);

  const birthday = () => {
    setage(age + 1);
  };

  return (
    <div>
      <h1>¡HOLA {props.name} desde componente funcional!</h1>
      <h2>Tu edad es de: {age}</h2>
      <button onClick={birthday}>Cumplir años</button>
    </div>
  );
};

GreetingsF.propTypes = {
  name: PropTypes.string,
};

export default GreetingsF;
