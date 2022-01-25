import React from "react";
import "./Sponsors.css";

import huawei from "../../graphics/sponsors/huawei.png";
import iss from "../../graphics/sponsors/duke-iss.png";
import colab from "../../graphics/sponsors/duke-colab.png";
import rhodes from "../../graphics/sponsors/duke-rhodes.png";

function Sponsors() {
    return (
        <div id="sponsors">
            <div className={"sponsors-container"}>
                <h1 className={"sponsor-title"}>Sponsors</h1>
                <div className={"sponsor-logos"}>
                    <img style={{width: "113px"}} src={huawei} alt={"huawei"}/>
                    <img style={{width: "305px", paddingBottom: "40px"}} src={iss} alt={"duke-iss"}/>
                    <img style={{width: "213px"}} src={colab} alt={"duke-colab"}/>
                    <img style={{width: "229px"}} src={rhodes} alt={"duke-rhodes"}/>
                </div>
            </div>
        </div>
    )
}

export default Sponsors;