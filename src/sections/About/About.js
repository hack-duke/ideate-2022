import React from "react";
import './About.css';

import left from "../../graphics/assets/about/left_shrubs.svg";
import right from "../../graphics/assets/about/right_shrubs.svg";

function About() {

    return (
        <div id="about">
            <img src={left} id="left"></img>

            <div className={"about-container"}>
                <div id="about-text">
                    <h1 id="about-title">What is Ideate?</h1>
                    <h3 id="about-subtitle">Ideate | ˈīdēˌāt | vb.</h3>
                    <h3 id="about-content">To explore a wide variety of possible solutions through generating a large quantity of diverse possible soutions, allowing you to step beyond the obvious and explore a range of ideas.</h3>
                    <h3 id="about-subtitle">Ideate 2022 is...</h3>
                    <h3 id="about-content">A two-day hybrid ideation challenge filled with awesome speakers, workshops, and a design challenge to explore how design and innovation interact. Ideate aims to observe how design thinking can be applied across fields, and is open to design aficionados, curious newcomers, and everyone in between!</h3>
                    <h3 id="about-subtitle">Our Purpose</h3>
                    <h3 id="about-content">We hope that Ideate will inspire students from all backgrounds to incorporate design thinking as part of their innovation process and to use it as a tool in their endeavors.</h3>
                </div>
            </div>
            <img src={right} id="right"></img>
        </div>
    )
}

export default About;

