import React from "react";
import "./navbar.css";
import { Button } from "reactstrap";

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-light nav-shadow">
        <div className="container">
          <div className="navbar-box">
            <a className="navbar-brand" href="/">
              <img
                src={require("../../../assets/images/logoCRUDContact.svg")}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              Customer Management
            </a>

            <Button color="primary" outline>
              Logout
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
