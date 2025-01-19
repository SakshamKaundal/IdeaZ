import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav className="navbar">
      <div className="logo">Idea  Bay</div>
      <div className="nav-links">
        <button 
              onClick={()=>{
                  navigate('/')
              }}
              className="btnhome">Home</button>
        <button className="btnhome">Users</button>
        <button className="btnLogin">Login</button>
        <button onClick={()=>{
            navigate('/signup')
        }} className="btnLogin">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;