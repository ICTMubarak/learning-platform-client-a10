import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
                <h1>This is home courses= {courses.length}</h1>
            </div>
        </div>
    );
};

export default Home;