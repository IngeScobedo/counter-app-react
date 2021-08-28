import ReactDOM from "react-dom";
import CounterApp from "./CounterApp";
//import FirstApp from "./FirstApp";
import "./index.css";

let root = document.querySelector("#root");

//ReactDOM.render(<FirstApp saludo={'que verga quieres'} />, root);

 ReactDOM.render(<CounterApp/>, root);
