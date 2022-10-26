import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContex';

 const Register = () => {


   const {createUser, signInWithGoogle} = useContext(AuthContext);



   const handleSubmit = event =>{
     event.preventDefault();
     const form = event.target; 
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;
     console.log(name, email,password); 

     createUser(email, password)
     .then(result => {
         const user = result.user;
         console.log('registered user', user); 
     })
     .catch(error => {
         console.error(error)
     })

 }

 const handleGoogleSignIn = () =>{

  signInWithGoogle()
  .then(result => {
    const user = result.user;
    console.log(user);
  })
  .catch(error => console.error(error));

 }

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

            <div className="hero min-h-screen bg-base-200" class="col-span-5 border-2">
              <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                      </div>

                      <div className="form-control">
                          <label className="label">
                             <span className="label-text">Email</span>
                          </label>
                          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                       </div>

                    <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
   
                    <div className="form-control mt-6">
                       <button type=''  className="btn btn-primary">Register</button>
                    </div>
                    <label className="label">
                      <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                    </label>
                  </div>
                </form>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Register and Login with Google</button>
              </div>
            </div>
          </div>
);
};

export default Register;