import React from 'react';

const Login = () => {
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
      <h1 className="text-5xl font-bold">Please Login now!</h1>
    </div>
    <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
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
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login with Google</button>
        </div>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Login;