import React from "react";
import './Navbar.css';


function Navbar() {
    // const handleScroll = () => {
    //     if (window.scrollY > window.innerHeight) {
    //         document.querySelector("#navbar").className = "navbar-color"
    //         document.querySelector("#navbar-title").className = "navbar-title visible"
    //     } else {
    //         document.querySelector("#navbar").className = "navbar";
    //         document.querySelector("#navbar-title").className = "navbar-title hidden"
    //     }
    // };

    // window.addEventListener("scroll", handleScroll);


    var prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
        var scrollPos = window.pageYOffset;
        if (scrollPos > prevScrollPos) {
            document.getElementById("navbar").style.top = "-70px";
        } else {
            document.getElementById("navbar").style.top = "0px";
        }
        prevScrollPos = scrollPos;

        document.querySelector("#faq-texts").children[1].style.visibility = ""
        document.querySelector("#schedule-texts").children[1].style.visibility = ""
        document.querySelector("#speakers-texts").children[1].style.visibility = ""
        document.querySelector("#tracks-texts").children[1].style.visibility = ""
        document.querySelector("#about-texts").children[1].style.visibility = ""
        if(window.scrollY > (5.92*window.innerHeight - 0.28*window.innerHeight)){
            document.querySelector("#faq-texts").children[1].style.visibility = "visible"
        }
        else if(window.scrollY > (4.92*window.innerHeight - 0.28*window.innerHeight)){
            document.querySelector("#schedule-texts").children[1].style.visibility = "visible"
        }
        else if(window.scrollY > (3.92*window.innerHeight - 0.28*window.innerHeight)){
            document.querySelector("#speakers-texts").children[1].style.visibility = "visible"
        }
        else if(window.scrollY > (2.3*window.innerHeight - 0.28*window.innerHeight)){
            document.querySelector("#tracks-texts").children[1].style.visibility = "visible"
        }
        else if (window.scrollY > (1*window.innerHeight - 0.28*window.innerHeight)) {
            document.querySelector("#about-texts").children[1].style.visibility = "visible"
        }
        else {
            document.querySelector("#navbar").className = "navbar";
            document.querySelector("#navbar-title").className = "navbar-title hidden"
        }
    };

    window.addEventListener("scroll", handleScroll);

    return (
        <div id="navbar">
            <div id="contents">
                <div id="content-left">
                    <div id="about-texts" className="navbar-text">
                        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href={"#about"}>About</a>
                        <span className="white-line">&nbsp;</span>
                    </div>
                    <div id="tracks-texts" className="navbar-text">
                        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href={"#tracks"}>Tracks</a>
                        <span className="white-line">&nbsp;</span>
                    </div>
                    <div id="speakers-texts" className="navbar-text">
                        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href={"#speakers"}>Speakers</a>
                        <span className="white-line">&nbsp;</span>
                    </div>
                    <div id="schedule-texts" className="navbar-text">
                        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href={"#schedule"}>Schedule</a>
                        <span className="white-line">&nbsp;</span>
                    </div>
                    <div id="faq-texts" className="navbar-text">
                        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href={"#faq"}>FAQ</a>
                        <span className="white-line">&nbsp;</span>
                    </div>
                    {/* <div id="sponsors-texts" className="navbar-text">
                        <a className="navbar-link" target="_blank" rel="noopener noreferrer" href={"#"}>Sponsors</a>
                        <span className="white-line">&nbsp;</span>
                    </div> */}
                </div>
                 <div id="navbar-title" className={"navbar-title"}><a target="_blank" rel="noopener noreferrer" href={"#landing"}>HackDuke</a></div>
            </div>
        </div>
    )
}

export default Navbar;
