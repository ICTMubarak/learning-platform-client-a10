import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = (course) => {
    

    return (
        <div>
            <h5><small> <Link course={course.course} to={`/start/${course.course.id}`}>{course.course.name}</Link> </small></h5>
        </div>
    );
};

export default SideBar;