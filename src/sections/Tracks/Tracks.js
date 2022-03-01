import React from "react";
import './Tracks.css';

import top from '../../graphics/assets/tracks/tracks-top.svg';
import bottom from '../../graphics/assets/tracks/tracks-bottom.svg';
import health from '../../graphics/assets/tracks/health-icon.svg';
import inequality from '../../graphics/assets/tracks/inequality-icon.svg';
import education from '../../graphics/assets/tracks/education-icon.svg';

function Tracks() {
    return (
        <div id="tracks">
            <div id="blobs">
                <img id="top" src={top} alt="blob"></img>
            </div>
            <div className={"tracks-container"}>
                <h1>TRACKS</h1>
                <div className="track-table">
                    <div className="track">
                        <img id="health" src={health}></img>
                        <h3>Health</h3>
                        <p>More than ever before, technology today is in a prime position to improve the quality, efficiency, and accessibility of health care. How can we design applications and technologies to support frontline workers, aid populations at higher risk, and address the health concerns that have emerged throughout this pandemic?</p>
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
                </div>
                <img id="bottom" src={bottom} alt="blob"></img>
            </div>
        </div>
    )
}

export default Tracks;