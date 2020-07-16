import React, {Component} from "react";
import {connect} from "react-redux";
import Situationtable from "../components/Situationtable";

class SituationContainer extends Component {
  render() {
    return (
      <div>
        <Situationtable situations={this.props.situations} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    situations: state.situations
  };
};

export default connect(mapStateToProps)(SituationContainer);
