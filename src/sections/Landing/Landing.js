import React from "react";
import './Landing.css';
import lefttree from "../../graphics/assets/landing-page/lefttree.svg";
import leftlowdoublelightbluetrees from "../../graphics/assets/landing-page/leftlowdoublelightbluetrees.svg";
import leftwidebluetree from "../../graphics/assets/landing-page/leftwidebluetree.svg";
import leftlowbehindroundtree from "../../graphics/assets/landing-page/leftlowbehindroundtree.svg";
import lowpinksmalltree from "../../graphics/assets/landing-page/lowpinksmalltree.svg";
import leftnormalpurpletree from "../../graphics/assets/landing-page/leftnormalpurpletree.svg";
import leftlowweirdrootplant from "../../graphics/assets/landing-page/leftlowweirdrootplant.svg";
import leftlowwidebluetree from "../../graphics/assets/landing-page/leftlowwidebluetree.svg";
import middlelowroundbluebush from "../../graphics/assets/landing-page/middlelowroundbluebush.svg";
import rightlowdoublebluebehindtrees from "../../graphics/assets/landing-page/rightlowdoublebluebehindtrees.svg";
import lowrightdoublebluetree from "../../graphics/assets/landing-page/lowrightdoublebluetree.svg";
import rightlowpinkcircletree from "../../graphics/assets/landing-page/rightlowpinkcircletree.svg";
import rightnormalbluetree from "../../graphics/assets/landing-page/rightnormalbluetree.svg";
import rightbigbluetree from "../../graphics/assets/landing-page/rightbigbluetree.svg";
import righthalfwidebluetree from "../../graphics/assets/landing-page/righthalfwidebluetree.svg";
import rightlowpinkroundduplicatebush from "../../graphics/assets/landing-page/rightlowpinkroundduplicatebush.svg";
import rightbluesmalltree from "../../graphics/assets/landing-page/rightbluesmalltree.svg";
import land from "../../graphics/assets/landing-page/land.svg";

function Landing() {
    return (
        <div id="landing">
            <div id="background">
                <img id="lefttree" src={lefttree} alt="lefttree"></img>
                <img id="leftlowdoublelightbluetrees" src={leftlowdoublelightbluetrees} alt="leftlowdoublelightbluetrees"></img>
                <img id="leftwidebluetree" src={leftwidebluetree} alt="leftwidebluetree"></img>
                <img id="leftlowbehindroundtree" src={leftlowbehindroundtree} alt="leftlowbehindroundtree"></img>
                <img id="lowpinksmalltree" src={lowpinksmalltree} alt="lowpinksmalltree"></img>
                <img id="leftnormalpurpletree" src={leftnormalpurpletree} alt="leftnormalpurpletree"></img>
                <img id="leftlowweirdrootplant" src={leftlowweirdrootplant} alt="leftlowweirdrootplant"></img>
                <img id="leftlowwidebluetree" src={leftlowwidebluetree} alt="leftlowwidebluetree"></img>
                <img id="middlelowroundbluebush" src={middlelowroundbluebush} alt="middlelowroundbluebush"></img>
                <img id="rightlowdoublebluebehindtrees" src={rightlowdoublebluebehindtrees} alt="rightlowdoublebluebehindtrees"></img>
                <img id="lowrightdoublebluetree" src={lowrightdoublebluetree} alt="lowrightdoublebluetree"></img>
                <img id="rightlowpinkcircletree" src={rightlowpinkcircletree} alt="rightlowpinkcircletree"></img>
                <img id="rightnormalbluetree" src={rightnormalbluetree} alt="rightnormalbluetree"></img>
                <img id="rightbigbluetree" src={rightbigbluetree} alt="rightbigbluetree"></img>
                <img id="righthalfwidebluetree" src={righthalfwidebluetree} alt="righthalfwidebluetree"></img>
                <img id="rightlowpinkroundduplicatebush" src={rightlowpinkroundduplicatebush} alt="rightlowpinkroundduplicatebush"></img>
                <img id="rightbluesmalltree" src={rightbluesmalltree} alt="rightbluesmalltree"></img>
                <img id="land" src={land} alt="land"></img>
            </div>
            <div id="header">
                <div id="landing-title">Ideate</div>
                <h2>a virtual design-thinking conference</h2>
                <h2>2022 details coming soon!</h2>
                <div id="register-btn">
                    <a target="_blank" rel="noopener noreferrer" href={"https://www.notion.so/hdspring21/Ideate-2021-Design-Guidebook-362b069cf7a447c2a5e270accaee371e"}><span>design guidebook</span></a>
                </div>
            </div>

            <div id="social-media">
                <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/hackduke/"}><i className="fab fa-facebook-f" style={{color: "#0C2B4A", marginRight: "20px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/hackduke/"}><i className="fab fa-instagram" style={{color: "#0C2B4A", marginRight: "20px"}}></i></a>
                <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/hackduke/"}><i className="fab fa-twitter" style={{color: "#0C2B4A", marginRight: "20px"}}></i></a>
            </div>
        </div>
    )
}

export default Landing;
