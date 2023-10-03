import React from "react";
import "./Popup.css";

export default function InfoPopup(props){

    return (props.trigger) ? ( 
        <div className={"info-popup text-center py-2"}>
            {/* <div className={"info-popup-inner"}> */}
                {/* <button className={"close-info-popup-btn"} onClick={() => props.setTrigger(false)}>Close</button> */}
                {props.children}
            {/* </div> */}
        </div>
    ) : "";
}