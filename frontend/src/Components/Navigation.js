import React, { Fragment } from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { isAuthenticated, logout } from "./helpers/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Navigation({ history }) {
  const handleLogout = (evt) => {
    logout(() => {
      console.log("Logged OUT");
      history.push("/signin");
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="navbar">
        <Link className="navbar-brand mx-5 text-danger" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse navlist"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav w-100 mr-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/"><span>Home</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-list-alt" aria-hidden="true"></i> Categories
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  cat1
                </Link>
                <Link className="dropdown-item" to="#">
                  cat2
                </Link>
                {/* <div className="dropdown-divider"></div> */}
                <Link className="dropdown-item" to="#">
                  cat3
                </Link>
              </div>
            </li>
            <li className="nav-item mx-auto search">
              <form className="d-flex gap-2">
                <input
                  className="form-control mr-sm-3 w-75 searchinput"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">Sign in</Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === 0 && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/dash">
                    Dashboard
                  </Link>
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role === 1 && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dash">
                    Admin Dashboard
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
          {isAuthenticated() && (
            <div>
              <h5 className="text-white text-center">
                Hello {isAuthenticated().uName}
              </h5>
              <Link
                className="d-block text-white text-center"
                to="#"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

export default withRouter(Navigation);
