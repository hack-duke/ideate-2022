import React from "react";
import './Footer.css';
import twitter from "../../graphics/assets/footer/twitter.svg";
import insta from "../../graphics/assets/footer/insta.svg";
import facebook from "../../graphics/assets/footer/facebook.svg";
import bushes from "../../graphics/assets/footer/bushes.svg";
import footerBox from "../../graphics/assets/footer/footerBox.svg";

function Footer() {
    return (
        <div id="footer">
            <div id="header">
                <img id="bushes" src={bushes}></img>
            </div>

            <div id="social-media">
                <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/hackduke/"}><i className="fab fa-facebook-f" style={{color: "#FFFFFF", marginRight: "20px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/hackduke/"}><i className="fab fa-instagram" style={{color: "#FFFFFF", marginRight: "20px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/hackduke/"}><i className="fab fa-twitter" style={{color: "#FFFFFF", marginRight: "20px"}}></i></a>
            </div>
        </div>
    )
}

export default Footer;
