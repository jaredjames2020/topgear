import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchMTABus} from "./actions/mtaActions";

// import CatList from "./CatList"; //presentational Component
import "./App.css";
import MTAContainer from "./containers/MTAContainer";

class App extends Component {
  componentDidMount() {
    this.props.fetchMTABus();
  }

  render() {
    return (
      <div>
        <MTAContainer bus_data={this.props.bus_data} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bus_data: state.bus_data,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMTABus: () => dispatch(fetchMTABus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
