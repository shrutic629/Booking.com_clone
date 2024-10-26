import React, { useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    // navigate("/")
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {user ? (
          <div>
            <span>{user.username}</span>
            <button className="navButton logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={navigateToLogin} className="navButton">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
