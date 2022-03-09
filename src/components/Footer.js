import React from "react";
import Github from "../images/github-logo-silhouette-in-a-square.png";
import Gmail from "../images/gmail-logo.png"
export default function Footer(){
    return(
        <div className={"footer"}>

            <a href={"mailto:prabhanshjain@gmail.com"}>
                <img src={Gmail}/>
            </a>


            <a href={"https://github.com/prabhanshjn"}>
                <img src={Github}/>
            </a>




        </div>
    )
}