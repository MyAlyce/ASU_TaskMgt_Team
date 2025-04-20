import React from "react";
import "./login.css";
import fbIcon from "../assets/FaceBook.png";  // Replace with your actual file path
import googleIcon from "../assets/Google.png"; // Replace with your actual file path
import phoneIcon from "../assets/Phone.png";   // Replace with your actual file path
import alyceLogo from "../assets/myAlyce.png";
function LoginPage({ onLogin }) {
    return (
        <div className="login-container">

            <div className="logo-section">
                <img src={alyceLogo} alt="Alyce Logo" className="logo" />
            </div>
            <button className="signup-btn" onClick={onLogin}>Sign up free</button>
            <div className="social-login">
                <p>Continue with</p>
                <div className="social-icons">
                    <img src={fbIcon} alt="Facebook" className="social-icon" />
                    <img src={googleIcon} alt="Google" className="social-icon" />
                    <img src={phoneIcon} alt="Phone" className="social-icon" />
                </div>
            </div>
            <p className="login-link">Login</p>
        </div>
    );
}

export default LoginPage;