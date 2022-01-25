import React from "react";
import './Landing.css';


function Landing() {
    return (
        <div id="landing">
            <div id="header">
                <div id="bg1"></div>
                <div id="bg2"></div>

                <div id="landing-title">Ideate</div>
                <h2>a virtual design-thinking conference</h2>
                <h2>April 10-11, 2021</h2>
                <div id="register-btn">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.notion.so/hdspring21/Ideate-2021-Design-Guidebook-362b069cf7a447c2a5e270accaee371e"}><span>design guidebook</span></a>
                </div>
            </div>

            <div id="social-media">
                <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/hackduke/"}><i className="fab fa-facebook-f" style={{color: "#0C2B4A", marginRight: "20px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/hackduke/"}><i className="fab fa-instagram" style={{color: "#0C2B4A", marginRight: "20px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/hackduke/"}><i className="fab fa-twitter" style={{color: "#0C2B4A", marginRight: "20px"}}></i></a>
            </div>
        </div>
    )
}

export default Landing;
