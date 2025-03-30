import React, { useState } from "react";
import "../style/pages/Profile.css";
import userProfile from "../assets/profile/userProfile.png";
import { MdDashboard } from "react-icons/md";
import {
  FaDumbbell,
  FaCalendarAlt,
  FaClipboardList,
  FaAppleAlt,
  FaEnvelope,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="profile-container">
      
      {/* Burger Button */}
      {!menuOpen && (
        <button className="burger-btn" onClick={() => setMenuOpen(true)}>
          <HiMenu />
        </button>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : "closed"}`}>
        <div>
          <h3>Fitness Management</h3>
          <ul>
            <li onClick={() => setMenuOpen(false)}><MdDashboard /> Dashboard</li>
            <li onClick={() => setMenuOpen(false)}><FaDumbbell /> Workouts</li>
          </ul>

          <h3>Schedule & Plans</h3>
          <ul>
            <li onClick={() => setMenuOpen(false)}><FaCalendarAlt /> Schedule</li>
            <li onClick={() => setMenuOpen(false)}><FaClipboardList /> Activities</li>
            <li onClick={() => setMenuOpen(false)}><FaAppleAlt /> Diet Programs</li>
          </ul>

          <h3>My Account</h3>
          <ul>
            <li onClick={() => setMenuOpen(false)}><FaEnvelope /> Message</li>
            <li onClick={() => setMenuOpen(false)}><FaCog /> Setting</li>
          </ul>
        </div>

        <button className="logout-btn" onClick={() => setMenuOpen(false)}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="profile-content">
        <div className="profile-header">
          <img src={userProfile} alt="Profile" className="profile-avatar" />
          <h2 className="name">Srey Sitharath</h2>
          <p className="role">Fitness Trainer & Nutritionist</p>
        </div>

        <form className="profile-form">
          <h3 className="section-title">Personal Info</h3>
          <div className="form-grid">
            <div><label>Full Name</label><input type="text" value="Srey Sitharath" readOnly /></div>
            <div><label>Location</label><input type="text" value="📍 PhnomPenh, Cambodia" readOnly /></div>
            <div><label>Gender</label><select><option>Male</option><option>Female</option></select></div>
            <div><label>Fitness Studio</label><input type="text" value="🏋️ 360 Fitness Studio" readOnly /></div>
            <div><label>Contact Number</label><input type="text" value="📞 987-654-3219" readOnly /></div>
            <div><label>Bio</label><textarea rows="2" placeholder="Write down" /></div>
            <div><label>Email</label><input type="email" value="📧 sithaRath@gmail.com" readOnly /></div>
          </div>

          <h3 className="section-title">Achievements</h3>
          <div className="form-grid">
            <div><label>Training Experiences</label><input type="text" value="6+" readOnly /></div>
            <div><label>No of Peoples Trained</label><input type="text" value="👥 50+" readOnly /></div>
            <div><label>No of Awards</label><input type="text" value="🏆 25" readOnly /></div>
            <div><label>No of People Awards</label><input type="text" value="👥 20" readOnly /></div>
          </div>

          <div className="form-buttons">
            <button type="button" className="discard">Discard</button>
            <button type="submit" className="save">Save Changes</button>
          </div>
        </form>
      </main>
    </div>
  );
}
