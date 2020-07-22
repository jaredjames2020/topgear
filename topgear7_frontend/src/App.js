import React, {Component} from "react";
import "./App.css";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMTABus} from "./actions/mtaActions";
import {fetchSituations} from "./actions/situationActions";
import Sidebar from "../src/components/Sidebar";
import MTAContainer from "./containers/MTAContainer";
import SituationContainer from "./containers/SituationContainer";
import RouteContainer from "./containers/RouteContainer";
import NotFound from "./components/NotFound";

class App extends Component {
  componentDidMount() {
    this.props.fetchMTABus();
    this.props.fetchSituations();
  }

  render() {
    return (
      <>
        <div className="container-home">
          <div className="container-header">
            <h1>TOP GEAR:</h1>
            <h4>WHERE DO YOU WANT TO GO?</h4>
          </div>
          <div className="container-body">
            <div className="navbar">
              <Sidebar />
            </div>
            <div className="widgets">
              <Switch>
                <Route
                  path="/situation"
                  render={props => (
                    <SituationContainer
                      situations={this.props.situations}
                      {...props}
                    />
                  )}
                />
                <Route
                  path="/busroute"
                  render={props => <RouteContainer {...props} />}
                />
                <Route path="/not_found" component={NotFound} />
                <Route
                  path="/"
                  exact
                  render={props => (
                    <MTAContainer bus_data={this.props.bus_data} {...props} />
                  )}
                />
                <Redirect to="/not_found" />
              </Switch>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    situations: state.situations,
    bus_data: state.bus_data,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMTABus: () => dispatch(fetchMTABus()),
    fetchSituations: () => dispatch(fetchSituations())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
