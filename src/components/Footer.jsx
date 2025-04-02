import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/gym_shark_logos/gym-shark-text-symbol-white.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

export default function MyFooter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have subscribed.");
  };

  return (
    <footer className="my-footer">
      <div className="logo-container">
        <div className="footer-logo-section">
          <img src={logo} alt="Gymshark Logo" />
          <p className="slogan">Be a Visionary</p>
        </div>
        <form action="" onSubmit={handleSubmit} className="email-form">
          <label htmlFor="email">Sign up today and push your limits.</label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Enter your Email"
            required
          />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="information my-footer-links">
        <p className="footer-label">Information</p>
        <div className="my-footer-links-container">
          <Link>About Us</Link>
          <Link>More Search</Link>
          <Link>Blog</Link>
        </div>
      </div>
      <div className="quick-link my-footer-links">
        <p className="footer-label">Quick Links</p>
        <div className="my-footer-links-container">
          <Link to="/home">Home</Link>
          <Link to="/routines">Routines</Link>
          <Link to="/exercises">Exercises</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
      <div className="services my-footer-links">
        <p className="footer-label">Our Services</p>
        <div className="my-footer-links-container">
          <Link>Brand List</Link>
          <Link>Order</Link>
          <Link>Exchange</Link>
        </div>
      </div>
      <div className="contact my-footer-links">
        <p className="footer-label">Contact Us</p>
        <div className="my-footer-links-container">
          <div className="inner-my-footer-links">
            <BiSolidPhoneCall className="footer-icons" />
            <div className="social-text">+855 999 999 999</div>
          </div>
          <div className="inner-my-footer-links">
            <FaEnvelope className="footer-icons" />
            <div className="social-text">gymshark@gmail.com</div>
          </div>
          <div className="inner-my-footer-links">
            <FaFacebook className="footer-icons" />
            <FaSquareXTwitter className="footer-icons" />
            <FaTelegram className="footer-icons" />
          </div>
        </div>
      </div>
    </footer>
  );
}
