import React from "react";
import "./Sponsors.css";

import hrt from "../../graphics/assets/sponsors/hrt.png";
import imc from "../../graphics/assets/sponsors/imc.png";
import js from "../../graphics/assets/sponsors/js.png";
import mems from "../../graphics/assets/sponsors/mems.svg";
import rhodes from "../../graphics/assets/sponsors/iid.png";

function Sponsors() {
    return (
        <div id="sponsors">
            <div className={"sponsors-container"}>
                <h1 className={"sponsor-title"}>Sponsors</h1>
                <div className={"sponsor-logos"}>
                    <img style={{height: "75px"}} src={imc} alt={"IMC"}/>
                    <img style={{height: "75px"}} src={hrt} alt={"Hudson River Trading"}/>
                    <img style={{height: "75px"}} src={rhodes} alt={"Duke Rhodes"}/>
                    <img style={{height: "75px"}} src={js} alt={"Jane Street"}/>
                    <img style={{height: "75px"}} src={mems} alt={"Mems"}/>
                </div>
            </div>
        </div>
    )
}

export default Sponsors;
