import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
import "./index.css";

let root = document.querySelector("#root");

let value = 100;

ReactDOM.render(<CounterApp value={value} />, root);
