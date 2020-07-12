import React, {Component} from "react";
// import {connect} from "react-redux";
import ActivityRoutelist from "../components/ActivityRoutelist";

class ActivityContainer extends Component {
  render() {
    return (
      <div>
        <ActivityRoutelist currentActivity={this.props.selected_route} />
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
