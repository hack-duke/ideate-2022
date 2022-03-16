import React from "react";
import './Landing.css';
import trees from "../../graphics/assets/landing-page/cover design.svg";

function Landing() {
    return (
        <div id="landing">
            <div id="header">
                <img id="trees" src={trees}></img>
                <div id="landing-title">Ideate</div>
                <h2>A virtual design-thinking conference</h2>
                <h2>April 9-10, 2022</h2>
                <div id="register-btn" style={{zIndex: 999}}>
                    <a target="_blank" rel="noopener noreferrer" href={"https://tinyurl.com/ideate2022"}><span>Register now!</span></a>
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
