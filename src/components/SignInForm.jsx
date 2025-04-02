import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GymSharkLogo from "./../assets/gym_shark_logos/gym-shark-logo.png";
import GymSharkText from "./../assets/gym_shark_logos/gym-shark-text.png";
import GymSharkLogoLine from "./../assets/gym_shark_logos/gym-shark-line.png";

export default function SignInForm() {
  // States
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  // Navigate to signup page
  const navigateSignUp = () => {
    navigate("/signup");
  };

  // Navigate to home page
  const goHome = () => {
    navigate("/home");
  };

  const userData = { email: "sitharath@gmail.com", password: "rath1234" };

  const handleSubmit = (e) => {
    if (
      inputData.email !== userData.email ||
      inputData.password !== userData.password
    ) {
      e.preventDefault();
      setError(true);
    } else {
      goHome();
    }
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in-form">
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
          value={inputData.email}
          type="email"
          name="email"
          id="email-input"
          placeholder="Enter your email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password-input"
          value={inputData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          value="Incorrect email or password"
          className={`error-state ${error ? "show" : "hide"}`}
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
