import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Start = () => {
    const course = useLoaderData();

    console.log('vvv=',course);
    return (
       <div class="grid grid-cols-6 gap-2">
        
         <div class="border-2">
           <div className="btn-group btn-group-vertical gap-4">
               <button className="btn btn-active">HTML</button>
               <button className="btn btn-active">CSS</button>
               <button className="btn btn-active">Bootstrup</button>
               <button className="btn btn-active">Tailwind</button>
               <button className="btn btn-active">JavaScript</button>
               <button className="btn btn-active">React</button>
           </div>
       </div>
        
        <div class="col-span-5 border-2">
            <div>
                <h1>Welcome to {course.name} course</h1>
            </div>
            <div>
                <img src={course.image} alt="" />
                <h3>Course Name: {course.name}</h3>
                 <h6>{course.description} Course Details..: </h6>
            </div>
        </div>
            
       </div>
    );
};

export default Start;