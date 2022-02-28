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


class Landing extends React.Component{
    componentDidMount(){
        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll', window.pageYOffset / ((document.body.children[1].children[0].children[1].offsetHeight) + (document.body.children[1].children[0].children[2].offsetHeight)));
          }, false);
    }
    render(){
        return (
            <div id="landing">
                <div id="background">
                    <img id="lefttree" class = "runleft" src={lefttree} alt="lefttree"></img>
                    <img id="leftlowdoublelightbluetrees" class = "runleft" src={leftlowdoublelightbluetrees} alt="leftlowdoublelightbluetrees"></img>
                    <img id="leftwidebluetree" class = "runleft" src={leftwidebluetree} alt="leftwidebluetree"></img>
                    <img id="leftlowbehindroundtree" class = "runleft" src={leftlowbehindroundtree} alt="leftlowbehindroundtree"></img>
                    <img id="lowpinksmalltree" class = "runleft" src={lowpinksmalltree} alt="lowpinksmalltree"></img>
                    <img id="leftnormalpurpletree" class = "runleft" src={leftnormalpurpletree} alt="leftnormalpurpletree"></img>
                    <img id="leftlowweirdrootplant" class = "runleft" src={leftlowweirdrootplant} alt="leftlowweirdrootplant"></img>
                    <img id="leftlowwidebluetree" class = "runleft" src={leftlowwidebluetree} alt="leftlowwidebluetree"></img>
                    <img id="middlelowroundbluebush" class="runright" src={middlelowroundbluebush} alt="middlelowroundbluebush"></img>
                    <img id="rightlowdoublebluebehindtrees" class="runright" src={rightlowdoublebluebehindtrees} alt="rightlowdoublebluebehindtrees"></img>
                    <img id="lowrightdoublebluetree" class="runright" src={lowrightdoublebluetree} alt="lowrightdoublebluetree"></img>
                    <img id="rightlowpinkcircletree" class="runright" src={rightlowpinkcircletree} alt="rightlowpinkcircletree"></img>
                    <img id="rightnormalbluetree" class="runright" src={rightnormalbluetree} alt="rightnormalbluetree"></img>
                    <img id="rightbigbluetree" class="runright" src={rightbigbluetree} alt="rightbigbluetree"></img>
                    <img id="righthalfwidebluetree" class="runright" src={righthalfwidebluetree} alt="righthalfwidebluetree"></img>
                    <img id="rightlowpinkroundduplicatebush" class="runright" src={rightlowpinkroundduplicatebush} alt="rightlowpinkroundduplicatebush"></img>
                    <img id="rightbluesmalltree" class="runright" src={rightbluesmalltree} alt="rightbluesmalltree"></img>
                    <img id="land" class="slowrunright" src={land} alt="land"></img>
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
}

export default Landing;
