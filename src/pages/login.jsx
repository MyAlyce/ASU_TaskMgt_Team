import React from "react";
import { useGoogleLogin } from '@react-oauth/google';
import "./login.css";
import fbIcon from "../assets/FaceBook.png";
import phoneIcon from "../assets/Phone.png";
import alyceLogo from "../assets/myAlyce.png";
import googleLogo from "../assets/Google.png";

function LoginPage({ onLogin }) {
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log("Login success:", tokenResponse);
            onLogin(tokenResponse.access_token);
        },
        onError: (errorResponse) => {
            console.error("Login Failed:", errorResponse);
        },
        scope: "https://www.googleapis.com/auth/drive.readonly",
    });

    return (
        <div className="login-container">
            <div className="logo-section">
                <img src={alyceLogo} alt="Alyce Logo" className="logo" />
            </div>

            <button className="signup-btn" onClick={() => {}}>Sign up free</button>

            <div className="social-login">
                <p>Continue with</p>
                <div className="social-icons">
                    <img src={fbIcon} alt="Facebook" className="social-icon" />

                    {/* Google Login Button */}
                    <div className="social-icon" style={{ cursor: 'pointer' }} onClick={() => login()}>
                        <img src={googleLogo} alt="Google" className="social-icon" />
                    </div>

                    <img src={phoneIcon} alt="Phone" className="social-icon" />
                </div>
            </div>

            <p className="login-link">Login</p>
        </div>
    );
}

export default LoginPage;