import React, {Component} from "react";

class Situationtable extends Component {
  renderRoutesAffected() {
    const map_situations = this.props.situations;
    let routes_affected = [];
    let routes_array = [];
    let routes = [];
    for (let prop in map_situations.PtSituationElement) {
      if (map_situations.PtSituationElement.hasOwnProperty(prop)) {
        routes_affected.push(
          map_situations.PtSituationElement[prop]["Affects"]
        );
      }
    }
    // console.log(routes_affected);
    for (let prop in routes_affected) {
      if (routes_affected.hasOwnProperty(prop)) {
        routes_array.push(
          routes_affected[prop]["VehicleJourneys"]["AffectedVehicleJourney"]
        );
      }
    }
    // console.log(routes_array);
    for (let prop in routes_array) {
      if (routes_array.hasOwnProperty(prop)) {
        routes.push(
          ...routes_array[prop].map(ref => ref["LineRef"].split("_").pop())
        );
      }
    }
    const unique_routes = [...new Set(routes)];
    return unique_routes.sort();
  }

  renderSummary() {
    const map_situations = this.props.situations;
    let summary = [];
    for (let prop in map_situations.PtSituationElement) {
      if (map_situations.PtSituationElement.hasOwnProperty(prop)) {
        summary.push(map_situations.PtSituationElement[prop]["Summary"]);
      }
    }
    return summary;
  }

  renderTableData() {
    return this.renderRoutesAffected().map((routes, index) => {
      return (
        <tr key={index}>
          <td>{routes}</td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.renderRoutesAffected());
    console.log(this.renderSummary());

    return (
      <div>
        <h1>SITUATION</h1>
        <table id="routes">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Situationtable;
