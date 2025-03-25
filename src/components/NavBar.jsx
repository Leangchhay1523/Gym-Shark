import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";

export default function NavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateProfile = () => {
    navigate("/profile");
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
        <div className="profile">
          <CgProfile className="profile-icon" onClick={navigateProfile} />
          <div className="profile-detail">
            <p>Welcome back Brother</p>
            <p>John Doe!!</p>
          </div>
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
