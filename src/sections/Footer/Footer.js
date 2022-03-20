import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div id="footer">
            <div id="social-media">
                <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/hackduke/"}><i className="fab fa-facebook-f" style={{color: "#FFFFFF", marginRight: "70px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/hackduke/"}><i className="fab fa-instagram" style={{color: "#FFFFFF", marginRight: "70px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/hackduke/"}><i className="fab fa-twitter" style={{color: "#FFFFFF", marginRight: "70px"}}></i></a>
            </div>
        </div>
    )
}

export default Footer;
