import React, {Component} from "react";
import {connect} from "react-redux";
import Situationtable from "../components/Situationtable";
import Sidebar from "../components/Sidebar";

class SituationContainer extends Component {
  render() {
    return (
      <div>
        <Situationtable
          situations={this.props.situations}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    situations: state.situations,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(SituationContainer);
