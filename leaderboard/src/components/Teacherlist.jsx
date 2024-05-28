import React from "react";
import "../styles/teacher.css";
 import Image1 from "../assets/Image1.jpg";
 import Image2 from "../assets/Image2.avif";
 import Image3 from "../assets/Image3.jpg";
const teacher=[
    {
        image:Image3,
        name:'Prof Gain Smith',
        duration:'30 hours lesson',
        cost:'100',
    },
    {
        image:Image3,
        name:'Prof Gain Smith',
        duration:'30 hours lesson',
        cost:'100',
    },
    {
        image:Image3,
        name:'Prof Gain Smith',
        duration:'30 hours lesson',
        cost:'100',
    },
    {
        image:Image3,
        name:'Prof Gain Smith',
        duration:'30 hours lesson',
        cost:'100',
    },
    {
        image:Image3,
        name:'Prof Gain Smith',
        duration:'30 hours lesson',
        cost:'100',
    },

];

const Teacherlist=()=> {
 return(
        <div className="teacher--list"><div className="list--header"><h2>Teachers</h2> 
        <select>
            <option value='english'>English</option>
            <option value='hindi'>Hindi</option>
          
            </select>
            </div>
            <div className="list--container">
                {teacher.map((teacher)=>(<div className="list">
                    <div className="teacher--details"><img src={teacher.image} alt={teacher.name}/><h2>{teacher.name}</h2>
                    </div>
                    <span>{teacher.duration}</span>
                    <span>${teacher.cost}/hr.</span>
                    <span className="teacher--todo">:</span>
                    </div>
                    ))}
            </div>

            </div>
      );
  };

  export default Teacherlist;