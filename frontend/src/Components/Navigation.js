import React from "react";
import './css/navbar.css';
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="navbar">
        <Link className="navbar-brand mx-5 text-danger" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navlist" id="navbarSupportedContent">
          <ul className="navbar-nav w-75 mr-auto ml-auto">
            <li className="nav-item dropdown mx-5">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">cat1</Link>
                <Link className="dropdown-item" to="#">cat2</Link>
                {/* <div className="dropdown-divider"></div> */}
                <Link className="dropdown-item" to="#">cat3</Link>
              </div>
            </li>
            <li className="nav-item mx-5 search">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-3 w-75 searchinput" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link active" to="/featured">Featured <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign in</Link>              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign up</Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
}

export default Navigation;
