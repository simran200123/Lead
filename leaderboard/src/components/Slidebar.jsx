import React from "react";
import{BiHome,BiBookAlt, BiTask, BiSolidReport,BiStats, BiMessage, BiEnvelope}from 'react-icons/bi';
import '../styles/slidebar.css';

const Slidebar=()=>{
    return(<div className="menu">
        <div className="logo">
            <BiBookAlt className="logo-icon"/>
        <h2>unFluke</h2></div>
        <div className="menu--list">
            <a href="#" className="item active">
                <BiHome className="icon"/>
                Leaderboard
            </a>
            <a href="#" className="item">
                <BiTask className="icon" />
                Historical Trading
            </a>
            <a href="#" className="item">
                <BiSolidReport className="icon"/>
              Scanners
            </a>
            <a href="#" className="item">
                <BiStats className="icon"/>
               Stats
            </a>
            <a href="#" className="item">
                <BiMessage className="icon"/>
            Alerts
            </a>
            <a href="#" className="item">
                <BiEnvelope
                className="icon"/>
              My Earnings
            </a>
           
            
        </div>
        </div>
    );
};

export default Slidebar;