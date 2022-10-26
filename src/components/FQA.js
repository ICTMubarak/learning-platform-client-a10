import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideBar from './SideBar';

const FQA = () => {
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
                <h1>FQA</h1>
                <br />

                <h5>1. Why we will use this site?</h5>
                <p>Ans: It is very easy to access and to increase your knowledge.</p>
                <h5>2. How many topics added in your site?</h5>
                <p>Ans: Currently we added 6 topic in our site. HTML, CSS, Bootstrup. Tailwind, JavaScript, and React</p>
                <h5>3. Is it free to access your site?</h5>
                <p>Ans: Yeah! It is totally free for you. But if you access our tutorial you must registerd and logind</p>
                <h5>4. Which Language used to build your website?</h5>
                <p>Ans: We used HTML, CSS, JS and React to build this site.</p>
                <h5>5. What is your future plan about your website?</h5>
                <p>Ans: In future we added mutch more topics in our site. </p>
 

            </div>
        </div>
    );
};

export default FQA;