import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchMTABus} from "./actions/mtaActions";
import {fetchSituations} from "./actions/situationActions";

// import CatList from "./CatList"; //presentational Component
import "./App.css";
import MTAContainer from "./containers/MTAContainer";
import SituationContainer from "./containers/SituationContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchMTABus();
    this.props.fetchSituations();
  }

  render() {
    return (
      <div>
        <MTAContainer bus_data={this.props.bus_data} />
        <SituationContainer situations={this.props.situations} />
      </div>
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
