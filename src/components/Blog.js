import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SideBar from './SideBar';



const Blog = () => {
    const courses = useLoaderData();
    
    return (
       
       
        <div class="grid grid-cols-6 gap-2">
        <div class="border-2">
           <div className="btn-group btn-group-vertical gap-4 ">

               {
                        courses.map(course => <SideBar key={course.id} course={course}></SideBar>)
                }
              
           </div>
       </div>
            
            <div class="col-span-5 border-2">
                <h1>Welcome to our Blog site</h1>
                <br />
                <h5>Question No-1 what is `cors`?</h5>
                <p>Answer: CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                <br />
                <h5>Question No-2 Why are you using `firebase`? What other options do you have to implement authentication?</h5>
                <p>Answer: Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices. We have some options to implement authentication. As like email, password. We can also use Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript, RxDB, Flutter, LoopBack, SashiDo.</p>
                <br />
                <h5>Question No-3 How does the private route work?</h5>
                <p>Answer: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                <br />
                <h5>Question No-4 What is Node? How does Node work?</h5>
                <p>Answer: Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                <br />
            </div>
        </div>
    );
};

export default Blog;