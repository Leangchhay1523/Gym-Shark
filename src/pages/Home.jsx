import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import { Link, NavLink } from 'react-router-dom';
import '../style/pages/Home.css';

/*Icons*/
import { CgProfile } from "react-icons/cg";


/*images*/
import muscle_man from '../assets/home_page/muscle-man.png';
import bench_press from '../assets/home_page/bench-press.png';
import welcome_back from '../assets/home_page/welcome-back.png';
import chris1 from '../assets/home_page/chris1.jpg';
import chris2 from '../assets/home_page/chris2.jpg';
import david1 from '../assets/home_page/david1.jpg';
import david2 from '../assets/home_page/david2.jpg';

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
            <CgProfile size={60} color="white" className="image-right-profile" />
            <p className="text-welcome3">Stop waiting and start do it!!</p>
            <div className="start-now-button">
              <Link to="/exercises" style={{ color: "white", textDecoration: "None" }}>Start Now!!</Link>
            </div>
          </div>
        </div>
      </div>
      
      <hr />

      {/* Content Home Page */}
      
      <div className="home-page-content">
        <h3 className="content-name">Chris Bumstead</h3>
        <div className="home-page-content-bodybuilder">
          <img src={chris1} alt="img4-chris" className="home-page-bodybuilder" />
          <img src={chris2} alt="img5-chris" className="home-page-bodybuilder" />
        </div>

        <hr />

        <h3 className="content-name">David laid</h3>
        <div className="home-page-content-bodybuilder">
          <img src={david1} alt="img6-david" className="home-page-bodybuilder" />
          <img src={david2} alt="img7-david" className="home-page-bodybuilder" />
        </div>

        <hr />

        <h3 className="content-name">General News</h3>
        <div className="home-page-content-generalnews">
          <iframe className="news-video" src="https://www.youtube.com/embed/dT_KBtUILfg?si=LrnCxV6q24nG08e_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className="news-video" src="https://www.youtube.com/embed/ei-RTWKznPo?si=GTjw88nKLyoepMV7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
