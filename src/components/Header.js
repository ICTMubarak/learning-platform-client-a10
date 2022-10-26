import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContex';


const Header = () => {

    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div>
                <div className="navbar bg-primary text-primary-content">
                     <Link to='/' className="btn btn-ghost normal-case text-xl">Learn With Mubarak</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/'>Courses</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/fqa'>FAQ</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/blog'>Blog</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log in</Link>
                     <Link className="btn btn-ghost normal-case text-xl" to='/register'>Regiter</Link>
                     {user?.displayName && <span>Welcome, {user.displayName}</span>}
                    
                     <input type="checkbox" className="toggle"/>

                </div>

               
                
        </div>
    );
};

export default Header;