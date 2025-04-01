import React from "react";
import logo from "../assets/gym_shark_logos/gym-shark-logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-form">
          <div className="logo">
            <img src={logo} alt="GymShark Logo" />
            <span style={{ fontSize: "32px", margin: "0 10px" }}>|</span>
            <h2>GYMSHARK</h2>
          </div>
          <h3>Sign Up</h3>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="date" placeholder="Date of Birth" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <p className="signin-link">
              Already have an account?{" "}
              <Link to="/" style={{ color: "black" }}>
                Sign in
              </Link>
            </p>
            <button type="submit" onClick={() => navigate("/home")}>
              Create Account
            </button>
          </form>
          <div className="terms">
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="signup-image" aria-hidden="true"></div>
      </div>
    </div>
  );
}
