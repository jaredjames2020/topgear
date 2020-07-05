import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Routelist from "./components/Routelist";

class App extends Component {
  render() {
    return (
      <div>
        <Routelist />
      </div>
    );
  }
}

export default App;
