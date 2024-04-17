import React, { useEffect } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  let history = useNavigate();
 const handleLogout = () => {
    localStorage.removeItem('token');
    history("/login");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            {/* <img src={logo}/> */}
            My Indore Guide
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destination">
                  Destinations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/food" aria-disabled="true">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/packages" aria-disabled="true">
                  Packages
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <Link to="/login">
              {" "}
              <button onClick={handleLogout} className="btn btn-success p-2" type="submit">
                {localStorage.getItem("token") ? `Logout`:`Login`}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
