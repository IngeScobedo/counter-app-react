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
      <h1>{counter}</h1>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
