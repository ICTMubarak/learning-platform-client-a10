import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SideBar from './SideBar';



const Blog = () => {
    const courses = useLoaderData();
    
    return (
       
       
        <div class="grid grid-cols-6 gap-2">
        <div class="border-2">
           <div className="btn-group btn-group-vertical gap-4">

               {
                        courses.map(course => <SideBar key={course.id} course={course}></SideBar>)
                }
              
           </div>
           
           
       </div>
            
            <div class="col-span-5 border-2">
                <h1>This is blog site</h1>
            </div>
        </div>
    );
};

export default Blog;