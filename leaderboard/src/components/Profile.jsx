import React from "react";
import ProfileHeader from "./ProfileHeader";
import '../styles/profile.css';
import userImage from '../assets/Image3.jpg';
import { BiBook } from "react-icons/bi";

const courses=[
    {
        title:'HTML CSS',
        duration:'2hours',
        icon:<BiBook/>,
    },
    {
        title:'Javascript',
        duration:'2hours',
        icon:<BiBook/>,
    },
    {
        title:'React',
        duration:'2hours',
        icon:<BiBook/>,
    },
]
const Profile=()=> {
        return(
        <div className="profile">
            <ProfileHeader/>

            <div className="user--profile">
                <div className="user--detail">
                    <img src={userImage} alt=""/>
                    <h3 className="username">Gain Smith</h3>
                    <span className="profession">Teacher</span>
                </div>
                <div className="user-courses">
                    {courses.map((course)=>(
                        <div className="course">
                            <div className="course--detail">
                                <div className='course--cover'>{course.icon}</div>
                                <div className="course-name">
                                    <h5 className="title">{course.title}</h5>
                                    <span className="duration">{course.duration}</span>
                                </div>
                                </div>
                                <div className="action">:
                                    </div>
                                </div>
                    ))}
                </div>
            </div>

        </div>
        );
  };

  export default Profile;
