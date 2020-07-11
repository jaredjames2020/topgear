import React, {Component} from "react";

class Routelist extends Component {
  // state = {
  //   bus_data: [],
  //   input_route_search: "",
  //   selected_route: ""
  // };
  //
  // inputHandleOnChange = event => {
  //   this.setState({input_route_search: event.target.value});
  // };
  //
  // selectedHandleOnChange = event => {
  //   this.setState({selected_route: event.target.value});
  // };
  //
  // displayName = () => {
  //   const findName = this.route_data.find(
  //     name => name.route_name === this.state.selected_route
  //   );
  //   console.log(findName);
  //   return findName.route_destination;
  // };

  render() {
    console.log(this.props.vehicleActivity);
    // const {input_route_search} = this.state;
    // const filteredRoutes = this.state.route_data.filter(route => {
    //   if (input_route_search !== "") {
    //     return (
    //       route.route_name
    //         .toLowerCase()
    //         .indexOf(input_route_search.toLowerCase()) !== -1
    //     );
    //   }
    // });

    return <div>HOME</div>;
  }
}
export default Routelist;
