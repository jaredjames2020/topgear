import React, {Component} from "react";
import {Link} from "react-router-dom";
// import {Container, Row, Col} from "react-bootstrap";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="d-flex" id="wrapper">
          <div
            className="bg-dark border-right text-white text-center rounded-lg"
            id="sidebar-wrapper"
          >
            <div className="sidebar-heading">TOP GEAR</div>
            <div className="list-group list-group-flush">
              <Link
                to="/"
                className="list-group-item list-group-item-action bg-light"
              >
                HOME
              </Link>
              <Link
                to="/busroute"
                className="list-group-item list-group-item-action bg-light"
              >
                ROUTES
              </Link>
              <Link
                to="/situation"
                className="list-group-item list-group-item-action bg-light"
              >
                SITUATION STATUS
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
