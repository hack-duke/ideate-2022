import React from "react";
import './About.css';

import chapel from '../../graphics/chapel.svg';

function About() {

    return (
        <div id="about">
            <div className={"about-container"}>
                <div id="about-text">
                    <h1>About</h1>
                    <h3 className="red">Ideate is a virtual design-thinking conference filled with awesome speakers, workshops, and a design challenge to explore how design and innovation interact. Ideate aims to observe how design thinking can be applied across fields, and is open to design aficionados, curious newcomers, and everyone in between!</h3>
                </div>
                <img id="about-chapel" src={chapel} alt="Duke chapel"></img>
            </div>
        </div>
    )
}

export default About;

