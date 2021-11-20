import React from "react";
import '../../App.css';
import { Button } from "../Layouts/Button";
import { Link } from "react-router-dom";
import'./HeroSection.css';

function HeroSection() {
    return (
    <div  className ="container">
        <div className="hero-container">
            <h1>Work's Market</h1>
            <p>Find great talent. Build your business</p>
            <div className="hero-btns">
            <Link to='/signin_enterprise'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>FIND TALENT</Button></Link> 
            <Link to='/signin'><Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>FIND WORK</Button></Link> 
            </div>
        </div>
        <div className="hero-image">
            <img src='/images/homepage.png' alt = "work's market" />
        </div>
    </div>
    );
}

export default HeroSection;