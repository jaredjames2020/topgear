import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      data: null
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response1 = await fetch('http://localhost:5000/vehicle');
      const body1 = await response1.json();
      console.log(body1)

      const response2 = await fetch('http://localhost:3001/api/buses');
      const body2 = await response2.json();
      console.log(body2)

      if (response1.status !== 200) {
        throw Error(body1.message)
      }
      return body1;
    };

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            // Render the newly fetched data inside of this.state.data
            <p className="App-intro">{this.state.data}</p>
          </div>
        );
      }
}

export default App;
