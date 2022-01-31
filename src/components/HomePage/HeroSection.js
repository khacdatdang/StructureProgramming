import React from "react";
import '../../App.css';
import { Button } from "../Layouts/Button";
import { Link } from "react-router-dom";
import'./HeroSection.css';

function HeroSection() {
    return (
    <div  className ="container">
        <div className="hero-container">
            <h1>Fashion Website</h1>
            <p>Make world more colorful</p>
            <div className="hero-btns">
           
            </div>
        </div>
        <div className="hero-image">
            <img src='/images/homepage.png' alt = "work's market" />
        </div>
    </div>
    );
}

export default HeroSection;