import React, {Component} from "react";
// import {connect} from "react-redux";
import ActivityRoutetable from "../components/ActivityRoutetable";

class ActivityContainer extends Component {
  render() {
    return (
      <div>
        <ActivityRoutetable
          currentActivity={this.props.selected_route}
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
