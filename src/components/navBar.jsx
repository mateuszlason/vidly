import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <div className="navbar-nav mr-auto" id="navbarSupportedContent">
          <NavLink className="nav-link nav-item" to="/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-link nav-item" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-link nav-item" to="/rentals">
            Rentals
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink className="nav-link nav-item" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link nav-item" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-link nav-item" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-link nav-item" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
