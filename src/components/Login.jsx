import React, { useEffect, useState } from "react";
import Image from "../assets/image2.png";
import Logo from "../assets/logo2.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";



const Login = () => {
  const [ showPassword, setShowPassword ] = useState(false);


  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" style={{ width: "250px", height: "auto" }}/>
          </div>
          <div className="login-center">
            <h1>Welome Back To </h1>
            <h2>Care Assured</h2>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
                </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Who are we?</a>
          </p>

          <p className="footer-bottom-p">
            Terms and Conditions
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
