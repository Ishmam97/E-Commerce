import React , {Fragment} from "react";
import './css/navbar.css';
import {Link , withRouter} from 'react-router-dom'
import {isAuthenticated , logout} from './helpers/auth'
function Navigation({history}) {
  const handleLogout = evt =>{
    logout(()=>{
      console.log("Logged OUT")
      history.push('/signin');
    })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="navbar">
        <Link className="navbar-brand mx-5 text-danger" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navlist" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 mr-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/"> <i className="fas fa-home"></i> Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fa fa-list-alt" aria-hidden="true"></i> Categories
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">cat1</Link>
                <Link className="dropdown-item" to="#">cat2</Link>
                {/* <div className="dropdown-divider"></div> */}
                <Link className="dropdown-item" to="#">cat3</Link>
              </div>
            </li>
            <li className="nav-item mx-auto search">
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-3 w-75 searchinput" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/featured"><i class="fas fa-star"> Featured </i><span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart"><i class="fas fa-shopping-cart"></i> Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><i class="fas fa-globe"></i> About us</Link>
            </li>
            {!isAuthenticated() && (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin"><i class="fas fa-sign-in-alt"></i> Sign in</Link>              
                </li>
              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role===0 &&(
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/user/dash">Dashboard</Link>              
                </li>

              </Fragment>
            )}
            {isAuthenticated() && isAuthenticated().role===1 &&(
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dash">Dashboard</Link>              
                </li>

              </Fragment>
            )}
          </ul>
          {isAuthenticated() &&(
              <div>
                <h5 className="text-white text-center">Hello {isAuthenticated().uName}</h5>
                <Link className="d-block text-white text-center" to="#" onClick={handleLogout}>Logout</Link> 
              </div>
              )}
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
