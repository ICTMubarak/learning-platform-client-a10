import React from 'react';

const Course = (course) => {
    console.log(course);
    return (
        
            <div>
            <img src={course.course.image} alt="" />
            <h3>Course Name: {course.course.name}</h3>
        
        </div>
        
    );
};

export default Course;