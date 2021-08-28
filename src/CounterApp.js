import { useState } from "react";
import PropTypes from "prop-types";

let CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  let handleAdd = () => {
    setCounter(counter +1 )
};
let handleReset = () => {
    setCounter(value)
}
let handleSubstract = () => {
    setCounter(counter-1)
}

  return (
    <>
    <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
  value: 0
}

export default CounterApp;
