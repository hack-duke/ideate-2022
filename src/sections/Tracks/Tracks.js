import React from "react";
import './Tracks.css';

import top from '../../graphics/assets/tracks/tracks-top.svg';
import bottom from '../../graphics/assets/tracks/tracks-bottom.svg';
import health from '../../graphics/assets/tracks/health-icon-glow.svg';
import inequality from '../../graphics/assets/tracks/inequality-icon.svg';
import education from '../../graphics/assets/tracks/education-icon.svg';
import environment from '../../graphics/assets/tracks/environment-icon.svg';

function Tracks() {
    return (
        <div id="tracks">
            <img id="top" src={top} alt="blob"></img>
            <div className={"tracks-container"}>
                <h1>TRACKS</h1>
                <h4>HackDuke emphasizes its commitment to social good through four unique project tracks.</h4>
                <h4></h4>
                <div className="track-table">
                    <div className="track">
                        <img id="health" src={health}></img>
                        <h3>Health</h3>
                        <p>The Health track allows hackers to work with various kinds of health related data, as well as connect with mentors from the intersection of health and technology. More than ever, technology today is in a prime position to improve the quality, efficiency, and accessibility of health and wellness.</p>
                    </div>
                    <div className="track">
                        <img id="inequality" src={inequality}></img>
                        <h3>Inequality</h3>
                        <p>While technology has the potential to reduce social disparities, it has more frequently further exemplified them. Facial recognition, surveillance, and other technologies disproportionately profile and incarcerate Black people. How can we design technology that supports and uplifts marginalized communities and remove the technology that harms them?</p>
                    </div>
                    <div className="track">
                        <img id="education" src={education}></img>
                        <h3>Education</h3>
                        <p>Transitioning to online learning hasn't been easy. How can we design solutions to help those struggling with learning in difficult home environments, create tools for classes transitioning to online formats, and replicate the learning experience at home?</p>
                    </div>
                    <div className="track">
                        <img id="environment" src={environment}></img>
                        <h3>Environment</h3>
                        <p>The Environment track encompasses a technical perspective to deal with large issues impacting energy use, allocation and environmental regulations. This track has many applications, including machine learning for resource extraction, the use of green energy and enforcing environmental policy.</p>
                    </div>
                </div>
                <img id="bottom" src={bottom} alt="blob"></img>
            </div>
        </div>
    )
}

export default Tracks;
