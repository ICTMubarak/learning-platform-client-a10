import React from 'react';
import { useLoaderData } from 'react-router-dom';
import '../css/Start.css'

const Start = () => {
    const course = useLoaderData();
    return (
       
       
        
        <div className='align-center' class='deatailCourse'>
            <div>
                <h1>Welcome to {course.name} course</h1>
            </div>
            <div>
                <img src={course.image} alt=""  />
                <h3>Course Name: {course.name}</h3>
                 <h6>{course.description} Course Details..: </h6>
            </div>
       </div>






    );
};

export default Start;