import React from "react";
import './FAQ.css';

import left from "../../graphics/assets/faq-page/left-design.svg";
import right from "../../graphics/assets/faq-page/right-design.svg";

function FAQ() {
    return (
        <div id="faq">
            <img src={left} id="left"></img>
            <div className="faq-text">
                <h1>FAQ</h1>
                <div className="faq-details">
                    <div className={"faq-col"}>
                        <h2>Who can participate in Ideate?</h2>
                        <p>Ideate is open to all university students throughout the world.</p>
                        <h2>How many people can be on a team?</h2>
                        <p>Teams should be between 1-4 members</p>
                        <h2>When is the deadline to register?</h2>
                        <p>We are accepting applications up to the day of the event! However, you may not get up to date information via email if you sign up later, so we encourage you to do so as soon as possible.</p>
                        <h2>What platforms will be used for communication?</h2>
                        <p>We'll have a Discord channel and use Zoom/YouTube Live to host and stream workshops and other activities.</p>
                        <h2>If I have any other questions, who can I contact?</h2>
                        <p>Feel free to shoot them to hackers@hackduke.org</p>
                    </div>
                    <div className={"faq-col"}>
                        <h2>Can I participate if I have no design experience?</h2>
                        <p>Yes! We’ll have plenty of workshops on topics ranging from UI/UX to How to Pitch that will help you get up to speed.</p>
                        <h2>What do I do if I don't have a team?</h2>
                        <p>Don't worry! We’ll have a Discord channel where you can meet other participants and form teams.</p>
                        <h2>How much does participating cost?</h2>
                        <p>We are totally and completely free! Thanks to our sponsors, winners of the design challenge will actually be able to select a charity of their choice to donate a monetary prize to!</p>
                        <h2>Will workshops/talks be recorded?</h2>
                        <p>Yes, they will be and uploaded to our YouTube channel @HackDuke afterward.</p>
                    </div>
                </div>
            </div>
            <img src={right} id="right"></img>
            {/* <div className={"for-more"}>
                <div style={{margin: "auto auto"}}>
                    <h2 style={{fontFamily: "Lora", fontSize: "35px", marginBottom: "60px"}}>Curious for more?</h2>
                    <a target="_blank" rel="noopener noreferrer" href={""}><span className={"more-button"}>Registration opens soon</span></a>
                </div>
            </div> */}
        </div>
    )
}

export default FAQ;
