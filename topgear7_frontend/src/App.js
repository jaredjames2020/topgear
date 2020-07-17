import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMTABus} from "./actions/mtaActions";
import {fetchSituations} from "./actions/situationActions";
import {Container, Row, Col} from "react-bootstrap";
import Sidebar from "../src/components/Sidebar";

import "./App.css";
import MTAContainer from "./containers/MTAContainer";
import SituationContainer from "./containers/SituationContainer";
import {RouteContainer as BusRoute} from "./containers/RouteContainer";
import NotFound from "./components/NotFound";

class App extends Component {
  componentDidMount() {
    this.props.fetchMTABus();
    this.props.fetchSituations();
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={3}>
              <Sidebar />
            </Col>
            <Col md={9}>
              <div>
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
            </Col>
          </Row>
        </Container>
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
//<SituationContainer situations={this.props.situations} />
// <Route path="/busroute" component={BusRoute} />
