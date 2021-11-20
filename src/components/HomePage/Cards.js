import React from "react";
import '../../App.css';
import { Button } from "../Layouts/Button";
import { Link } from "react-router-dom";
import'./Cards.css';

function Cards() {
    return (
        <ul>
    <li  className ="Container">
        <div className="cards-image1">
            <img src="/images/find-great-work.webp" alt = "work's market" height = "600"/>
        </div>
        <div className="cards-content1" >
            <ul>
        <li className="cards-container">
            <p>For Talent</p>
            <h1>Find great work</h1>
            <h2>Meet clients you're excited to work with and take your career or business to new heights.</h2>
        </li>
            <div className="cards-table">Find opportunities for every stage of your freelancer careeer</div>
            <div className="cards-table">Control when, where, and know you work</div>
            <div className="cards-table">Explore different ways to earn</div>
            <Link to='/signin'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>FIND ENTERPRISE</Button></Link>
            </ul>
        </div>  
    </li>
    <li  className ="Container">
    <div className="cards-content2" >
            <ul>
        <li className="cards-container">
            <p>For Enterprise</p>
            <h1>Complete your goals</h1>
            <h2>Meet talents and have a excellent contract to reach your aims and make the world better.</h2>
        </li>
            <div className="cards-table">Find opportunities for every stage of your freelancer careeer</div>
            <div className="cards-table">Control when, where, and know you work</div>
            <div className="cards-table">Explore different ways to earn</div>
            <Link to='/signin'><Button className='btn' buttonSize='large'>FIND TALENT</Button></Link>
        </ul>
        </div>  
        <div className="cards-image2">
            <img src="/images/" alt = "work's market" />
        </div>
    </li>
    <li className="Container">
        <div className="aim-title">
        <h1>What we're aiming</h1>
        </div>
        <div className="object-aim">
        <ul>
        <li className="object-image">
            <img src="/images/cara.webp" alt = "work's market" width="300" height="400"/>
        </li>
        <li className="object-title">
        <p>“The freelance talent we work with are more productive than we ever thought possible.”</p>
        </li>  
        </ul>
        </div>
        <div className="object2-aim">
        <ul>
        <li className="object-image">
            <img src="/images/sam.webp" alt = "work's market" width="300" height="400"/>
        </li>
        <li className="object-title">
            <p>“My relationship with Cara and CompuVision keeps on growing. The projects get larger and more technical every year.”</p>
        </li>  
        </ul>
        </div>
    </li>
    </ul>
    
    );
}

export default Cards;