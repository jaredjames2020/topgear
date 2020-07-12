import React, {Component} from "react";
// import {connect} from "react-redux";
import Routeactivitytable from "../components/Routeactivitytable";
import Routelist from "../components/Routelist";

class ActivityContainer extends Component {
  render() {
    return (
      <div>
        <Routeactivitytable
          selected_route={this.props.selected_route}
          directionRef0={this.props.directionRef0}
          directionRef1={this.props.directionRef1}
        />
        <Routelist
          selected_route={this.props.selected_route}
          directionRef0={this.props.directionRef0}
          directionRef1={this.props.directionRef1}
        />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     currentActivity: state.currentActivity
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     currentActivity: addActivity =>
//       dispatch({type: "ADD_ACTIVITY", addActivity})
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ActivityContainer);
export default ActivityContainer;
