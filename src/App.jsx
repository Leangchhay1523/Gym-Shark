import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

// Import Style
import "./index.css";

// Import Components and Page
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Routine from "./pages/Routine";
import Exercises from "./pages/Exercises";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyFooter from "./components/Footer";

function App() {
  const location = useLocation();
  const notRenderPage = ["/signup", "/"];
  const checkRender = !notRenderPage.includes(location.pathname);

  return (
    <>
      {checkRender && <NavBar />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/routines" element={<Routine />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* checkRender && <MyFooter />}
      {/* <MyFooter /> */}
    </>
  );
}

export default App;
