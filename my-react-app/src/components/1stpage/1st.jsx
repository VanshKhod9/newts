import React from "react";
import './1st.css';
import logoo from '../../assets/photoo.png';
import { useState, useEffect } from "react";

const FirstPage = () => {
    const words = ["Image", "Video", "Script", "Avatar"];
    const [index, setIndex] = useState(0);

     useEffect(() => {
        const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % words.length);
        }, 1000);
        return () => clearInterval(interval);
        }, []);
  return (
    <>
        <div className="first-page">
            <div className="Company-Name">
                <p>Lavatar AI</p>
            </div>
            <div className="All-Pages">
                <p>Lavatar Studio</p>
                <p>How It Works</p>
                <p>Testimonials</p>
                <p>Pricing</p>
                <p>Contact Us</p>
            </div>
            <div className="Login-button">
                <button className="login">Login</button>
                <button className="sign">Sign Up</button>
            </div>
        </div>  
        




        <div className="first-page-content">
            <div className="exceptbutton">
                <div className="exceptsectext">
                    <div className="AiAssited">
                        <p className="ai">AI assisted</p>
                        <p className="changingtext">{words[index]}!</p>
                    </div>
                    <div className="twotext">
                        <a>Create</a>
                        <p>Anything</p>
                    </div>
                </div>
                <p className="sectext">Script, edit, and publish-all in one place.</p>
            </div>
        </div>
        <div className="buttonText">
            <button className="gradient-button">
                <span className="button-text">Get started. It's free!</span>
                <span className="arrow-icon">→</span>
            </button>
        </div>






        <div className="interface">
            <img src={logoo} alt="" />
        </div>
    </>
  );
}
export default FirstPage;