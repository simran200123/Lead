import React from "react";
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from "react-icons/bi";


const course=[
    {
        title:'Web Dev',
        icon:<BiLogoHtml5/>,
    },
    {
        title:'App Dev',
        duration:'2 Hours',
        icon:<BiLogoAndroid/>,
    },
    {
        title:'UI & UX',
        duration:"2 Hours",
        icon:<BiBuilding/>,
    },
];
 const Card=()=>{
    return <div className="card--container">
        {course.map((item)=>(
            <div className="card">
                <div className="card--cover"> 
                {item.icon}</div>
                <div className="card--title"><h3>{item.title}</h3></div>
             </div>
        ))}


    </div>
 };

 export default Card;