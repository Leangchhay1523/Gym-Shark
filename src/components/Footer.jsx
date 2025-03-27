import React from "react";
import { useState } from "react";

import logo from "/src/assets/gym_shark_logos/gym-shark-text-symbol-white.png";
import { FaRegEnvelope } from "react-icons/fa";

export default function MyFooter() {
  return (
    <footer className="my-footer">
      <div className="logo-container">
        <div className="logo-section">
          <img src={logo} alt="Gymshark Logo" />
          <p className="slogan">Be a Visionary</p>
        </div>
        <form action="" className="email-form">
          <label htmlFor="email">Sign up today and push your limits.</label>
          <div className="email-input">
            <FaRegEnvelope className="envelope" />
            <input type="email" name="" id="email" />
          </div>
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="quick-link"></div>
      <div className="information"></div>
      <div className="services"></div>
      <div className="contact"></div>
    </footer>
  );
}
