import React, {Component} from "react";
import {Table, Col} from "react-bootstrap";

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

    for (let prop in routes_affected) {
      if (routes_affected.hasOwnProperty(prop)) {
        routes_array.push(
          routes_affected[prop]["VehicleJourneys"]["AffectedVehicleJourney"]
        );
      }
    }

    for (let prop in routes_array) {
      if (routes_array.hasOwnProperty(prop)) {
        routes.push(
          ...routes_array[prop].map(ref => ref["LineRef"].split("_").pop())
        );
      }
    }

    const unique_routes = [...new Set(routes)];
    const sortAlphaNum = (a, b) => a.localeCompare(b, "en", {numeric: true});
    return unique_routes.sort(sortAlphaNum);
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

  renderTableVehicleData() {
    return (
      <tr key={1}>
        <td>
          {this.renderRoutesAffected()
            .toString()
            .replace(/,/g, ", ")}
        </td>
      </tr>
    );
  }

  renderTableSummaryData() {
    return this.renderSummary().map((summary, index) => {
      return (
        <tr key={index}>
          <td>{summary}</td>
        </tr>
      );
    });
  } //.replace(/<(.*)>/, "") - regex

  render() {
    return (
      <div>
        <Col>
          <h1>ROUTES WITH PLANNED SERVICE CHANGES</h1>
          <br></br>
          <p>
            {this.props.loading
              ? " LOADING VEHICLE STATUS"
              : this.renderTableVehicleData()}
          </p>
          <br></br>
          <br></br>
        </Col>
        <h3>SERVICE SUMMARY</h3>
        <Table striped bordered hover id="routes" className="table">
          <tbody id="bodyTable">
            {this.props.loading
              ? " LOADING SUMMARY"
              : this.renderTableSummaryData()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Situationtable;