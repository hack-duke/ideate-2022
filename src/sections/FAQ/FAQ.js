import React from "react";
import './FAQ.css';

function FAQ() {
    return (
        <div id="faq">
            <div className="faq-text">
                <h1>FAQ</h1>
                <div className="faq-details">
                    <div className={"faq-col"}>
                        <h2>Who can participate in Ideate?</h2>
                        <p>Ideate is open to all university students throughout the world.</p>
                        <h2>What do I do if I don’t have a team?</h2>
                        <p>Don't worry! We’ll have a Discord channel where you can meet other participants and form teams.</p>
                        <h2>What platforms will be used for communication?</h2>
                        <p>We'll have a Discord channel and use Zoom/Youtube Live to host and stream workshops and other activities.</p>
                        <h2>How much does participating cost?</h2>
                        <p>We are totally and completely free! Thanks to our sponsors, winners of the design challenge will actually be able to select a charity of their choice to donate a monetary prize to!</p>
                        <h2>If I have any other questions, who can I contact?</h2>
                        <p>Email hackers@hackduke.org</p>
                    </div>
                    <div className={"faq-col"}>
                        <h2>Can I participate if I have no design experience?</h2>
                        <p>Yes! Ideate was created for students new to design. We wanted to emphasize learning new skills, and that’s why the workshops and speaker events on Day 1 should help you better understand the design-thinking process and its applications.</p>
                        <h2>How many people can be on a team for the design challenge?</h2>
                        <p>Teams should be between 3-4 members</p>
                        <h2>When is the deadline to register?</h2>
                        <p>We are accepting applications up to the day of the event! However, you may not get up to date information via email if you sign up later, so we encourage you to do so as soon as possible.</p>
                        <h2>Will workshops/talks be recorded?</h2>
                        <p>Yes, they will be and uploaded to our Youtube channel @HackDuke afterward. We encourage you to attend them live since it’s a great opportunity to learn and engage with cool speakers (and other students!).</p>
                    </div>
                </div>
            </div>
            <div className={"for-more"}>
                <div style={{margin: "auto auto"}}>
                    <h2 style={{fontFamily: "Lora", fontSize: "35px", marginBottom: "60px"}}>Curious for more?</h2>
                    <a target="_blank" rel="noopener noreferrer" href={"https://hackduke.typeform.com/to/QJSLODH8"}><span className={"more-button"}>Join Here</span></a>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
