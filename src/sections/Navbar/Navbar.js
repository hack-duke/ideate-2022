import React from "react";
import './Navbar.css';


function Navbar() {
    const handleScroll = () => {
        if (window.scrollY > document.body.children[1].children[0].children[1].offsetHeight) {
            document.querySelector("#navbar").className = "navbar-color"
            document.querySelector("#navbar-title").className = "navbar-title visible"
        } else {
            document.querySelector("#navbar").className = "navbar";
            document.querySelector("#navbar-title").className = "navbar-title hidden"
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <div id="navbar">
            <div id="contents">
                <div className="navbar-text"><a target="_blank" rel="noopener noreferrer" href={"https://hackduke.org"}>by HACKDUKE</a></div>
                 <div id="navbar-title" className={"navbar-title hidden"}>Ideate</div>
                <div className="navbar-text"><a target="_blank" rel="noopener noreferrer" href={"https://www.notion.so/hdspring21/Ideate-2021-Design-Guidebook-362b069cf7a447c2a5e270accaee371e"}>DESIGN GUIDEBOOK</a></div>
            </div>
        </div>
    )
}

export default Navbar;
