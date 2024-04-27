import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  const auth=localStorage.getItem("user")
  const handel=()=>{
    localStorage.clear()
    navigate("/signup")
  }
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {/* ======right side==== */}

           { auth?<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/add" className="nav-link px-2 text-white">
                  Add
                </Link>
              </li>
              <li>
              <Link to='/signup' className="nav-link px-2 text-white" onClick={handel}>
                  Logout
                </Link>
              </li>
              <li><Link to='/users' className="nav-link px-2 text-white">
                  Users
                </Link></li>
              <li>
              </li>
            </ul>:<>
            <Link to="/signup" className="nav-link px-2 text-white">
                  SignUp
                </Link>
                <Link to="/login" className="nav-link px-2 text-white">
                  Login
                </Link>
            </>}
            {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}

        {/* <div class="text-end"> */}
          {/* <button onClick={()=>navigate('/users')} type="button" className="btn btn-outline-light me-2">Users</button> */}
          {/* <button type="button" class="btn btn-warning">Sign-up</button> */}
        {/* </div> */}
          </div>

        </div>
        </header>
    </>
  );
};

export default Navbar;
