import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link, NavLink } from 'react-router-dom';
import '../style/pages/Home.css';

/*images*/

import muscle_man from '../assets/home_page/muscle-man.png';
import bench_press from '../assets/home_page/bench-press.png';
import welcome_back from '../assets/home_page/welcome-back.png';

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-page-Welcome-header">
        {/* Image left side */}
        <div className="image-left">
          <img src={muscle_man}  alt="img1" className="muscle_man-image"/>
          <div className="Welcome-text-header1">
            <p className="text-welcome1">Welcome Back Sitharath Srey !!!</p>
            <p className="text-welcome2">Start your day with a new achievement!</p>
            <img src={bench_press}  alt="img2" className="bench_press-image"/>
          </div>
        </div>

        {/* Image right side */}
        <div className="image-right">
          <img src={welcome_back}  alt="img3" className="welcome-back-image"/>
          <div className="Welcome-text-header2">
            <p className="text-welcome3">Stop waiting and start do it!!</p>
            <div className="start-now-button">
              <Link to="/exercises" style={{ color: "white", textDecoration: "None" }}>Start Now!!</Link>
            </div>
          </div>
          
        </div>
      </div>
      






    </div>
  )
}
