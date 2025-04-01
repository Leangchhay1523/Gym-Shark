import { useState, useEffect } from "react";
import SignInForm from "../components/SignInForm";
import SignInBanner from "./../assets/signin/signin-banner.png";

export default function SignIn() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sign-in-page">
      <div className="sign-in-banner">
        <img
          className={`signin-banner ${width < 560 ? "no-banner" : ""}`}
          src={SignInBanner}
          alt="Sign In Banner"
        />
      </div>
      <div className="sign-in-form-container">
        <SignInForm className="signin-form" />
      </div>
    </div>
  );
}
