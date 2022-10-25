import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Home = () => {
    const courses = useLoaderData();
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
                <h1>There are have {courses.length} Courses to Learn With Mubarak!</h1>
                <div class="grid grid-cols-3 gap-2 border-4 gap-4">
                     {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                     }
                </div>
                
            </div>
        </div>
    );
};

export default Home;