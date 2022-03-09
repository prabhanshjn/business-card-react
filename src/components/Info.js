import React from "react";
import ProfilePic from "../images/Profile_Pic.JPG"
import Email from "../images/email.png"
import LinkedIN from "../images/linkedin.png"

export default function Info(){
    return(
        <div className={"info"}>
            <img className={"info-pic"} src={ProfilePic}/>
            <h1> Prabhansh Jain </h1>
            <h3> Frontend Developer</h3>
            <small> prabhansh.website</small>
            <div className={"info-buttons"}>
                <a href={"mailto:prabhanshjain@gmail.com"}>
                <button className={"email-button"} type={"button"} > <img className={"info-button-image"} src={Email}/> <p className={"button-text"}>Email</p> </button>
                </a>
                <a href={"https://www.linkedin.com/in/prabhansh-jain-660243158/"}>
                <button className={"linkedin-button"} type={"button"}><img className={"info-button-image"} src={LinkedIN}/><p className={"button-text"}>LinkedIn</p> </button>
                </a>
            </div>
        </div>
    )
}