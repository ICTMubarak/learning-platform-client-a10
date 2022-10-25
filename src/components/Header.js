import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
                <div className="navbar bg-primary text-primary-content">
            
                     <Link to='/' className="btn btn-ghost normal-case text-xl">Learn With Mubarak</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/'>Courses</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/fqa'>FAQ</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/register'>Regiter</Link>
                     <input type="checkbox" className="toggle" checked />
                </div>
                
        </div>
    );
};

export default Header;