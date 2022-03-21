import React from "react";
import './Landing.css';
import trees from "../../graphics/assets/landing-page/cover design.svg";
import ideate from "../../graphics/assets/landing-page/ideate.svg";

function Landing() {
    return (
        <div id="landing">
            <div id="header">
                <img id="trees" src={trees}></img>
                <img id="ideate" src={ideate}></img>
                <h2></h2>
                <h2>April 9-10, 2022</h2>
                <h3>Duke University</h3>
                <div id="register-btn" style={{zIndex: 999}}>
                    <a target="_blank" rel="noopener noreferrer" href={"https://tinyurl.com/ideate2022"}><span>REGISTER</span></a>
                </div>
            </div>
        </div>
    )
}

export default Landing;
