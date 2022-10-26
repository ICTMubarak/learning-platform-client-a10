import React from 'react';
import { Link } from 'react-router-dom';


const Course = (course) => {
    

    return (

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={course.course.image} alt={course.course.name} /></figure>
  <div className="card-body gap-4">
    <h2 className="card-title">Course Name: {course.course.name}</h2>
    <p>Description: {course.course.description}</p>
    <div className="card-actions justify-center">
    <h5><small>Start the Course: <Link course={course.course} to={`/start/${course.course.id}`}>{course.course.name}</Link> </small></h5>
    </div>
  </div>
</div>


        
    );
};

export default Course;