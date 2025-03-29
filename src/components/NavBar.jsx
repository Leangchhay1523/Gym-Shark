import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import GymSharkLogo from "/src/assets/gym_shark_logos/gym-shark-text-symbol-white.png";

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const NavBarData = [
    {
      name: "Home",
      to: "/home",
      cName: location.pathname === "/home" ? "active" : "",
    },
    {
      name: "Routines",
      to: "/routines",
      cName: location.pathname === "/routines" ? "active" : "",
    },
    {
      name: "Exercises",
      to: "/exercises",
      cName: location.pathname === "/exercises" ? "active" : "",
    },
    {
      name: "Profile",
      to: "/profile",
      cName: location.pathname === "/profile" ? "active" : "",
    },
  ];

  return (
    <div>
      <nav className="nav-bar">
        <div onClick={navigateHome} className="profile">
          <img src={GymSharkLogo} alt="Gym Shark Logo" />
        </div>

        <button onClick={toggleMenu} className="menu-toggle">
          <IoMdMenu className="menu-icon" />
        </button>

        <div className="nav-bar-content">
          {NavBarData.map((obj, index) => (
            <Link to={obj.to} className={obj.cName} key={index}>
              {obj.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className={`nav-bar-content-phone ${isMenuOpen ? "open" : "close"}`}>
        {NavBarData.map((obj, index) => (
          <Link to={obj.to} className={obj.cName} key={index}>
            {obj.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
