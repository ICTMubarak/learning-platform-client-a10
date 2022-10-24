import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h1>This is home courses= {courses.length}</h1>
        </div>
    );
};

export default Home;