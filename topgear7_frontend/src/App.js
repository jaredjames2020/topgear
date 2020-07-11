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
        <MTAContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMTABus: () => dispatch(fetchMTABus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//
//   render() {
//     console.log(this.props.loading)
//     return (
//       <div>
//         <h1>CatBook</h1>
//         <CatList catPics={this.props.catPics} />
//       </div>
//     );
//   }
// }
