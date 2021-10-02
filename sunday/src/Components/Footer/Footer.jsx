import React from "react";
import { CommonHeading } from "../Common/CommonHeading";

export const Footer=()=>{
    return(
        <div style={{color:"red"}}>
            {/* <h1>This is Footer</h1> */}
            <CommonHeading/>
        <nav>
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">Contact</a>
            <a href="">Services</a>
        </nav>
        </div>
    )
}