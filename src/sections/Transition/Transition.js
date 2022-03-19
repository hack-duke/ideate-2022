import React from "react";
import './Transition.css';


function Transition({topColor, bottomColor}) {
    // const prev = this.previousSibling;
    
    function setGrad() {
        document.getElementById("transition").style.background = 
        "linear-gradient(" + topColor + " 0% , " + bottomColor + " 100%)"
    }

    // window.onload = setGrad();

    return (
        <div>        
            <div id="transition"></div>
            <p onload={setGrad()}></p>
        </div>
    )

}

export default Transition;