import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GymSharkLogo from "./../assets/gym_shark_logos/gym-shark-logo.png";
import GymSharkText from "./../assets/gym_shark_logos/gym-shark-text.png";
import GymSharkLogoLine from "./../assets/gym_shark_logos/gym-shark-line.png";

export default function SignInForm() {
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate("/signup");
  };
  const goHome = () => {
    navigate("/home");
  };

  return (
    <form action={goHome} className="sign-in-form">
      <div className="logo-section">
        <img
          src={GymSharkLogoLine}
          alt="Gym Shark Logo Line"
          className="logo-line-img"
        />
      </div>
      <p className="sign-in-text">Login</p>
      <div className="form-section">
        <input
          type="email"
          name="email"
          id="email-input"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="passworx"
          id="password-input"
          placeholder="Enter your password"
          required
        />
        <div className="auth-links">
          <p onClick={navigateSignUp}>Don't have an account?</p>
          <p>Forget Password?</p>
        </div>
        <input type="submit" value="Login" />
      </div>
      <div className="legal-links">
        <p>Term of Use</p>
        <div className="verticle-line"></div>
        <p>Privacy Policy</p>
      </div>
    </form>
  );
}
