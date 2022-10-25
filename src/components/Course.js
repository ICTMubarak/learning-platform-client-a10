import React from 'react';
import { Link } from 'react-router-dom';
import Start from './Start';

const Course = (course) => {
    //console.log('cccc====',course.course);

    return (
            <div>
            <img src={course.course.image} alt="" />
            <h3>Course Name: {course.course.name}</h3>
            <h6>Description: {course.course.description}</h6>
            <p><small>Start the Course: <Link course={course.course} to={`/start/${course.course.id}`}>{course.course.name}</Link> </small></p>
        </div>
        
    );
};

export default Course;