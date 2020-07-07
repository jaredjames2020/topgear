import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import Routelist from "./components/Routelist";
import Routestatus from "./components/Routestatus";

console.log(process.env.REACT_APP_MTA_API_KEY);

class App extends Component {
  render() {
    return (
      <div>
        <Routelist />
        <Routestatus />
      </div>
    );
  }
}

export default App;
