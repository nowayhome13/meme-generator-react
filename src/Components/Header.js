import React from "react";

import '../index.css';

export default function Header() {
    return(
        <div>
            <header>
            
            <img src="./Images/Troll Face.png" className="header-img"/>
            <h3 className="header-title">Meme Generator</h3>
            
            <p className="header-right">React Course - Project 3</p>
            </header>
        </div>
    )
}