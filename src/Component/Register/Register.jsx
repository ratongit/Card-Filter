import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {
   const {user, createUser} = useContext(AuthContext)
   console.log(createUser)
    const handleRegister = event =>{
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value 
       createUser(email,password)
       .then(result =>{
        const logged = result.user
        console.log(logged)
        form.reset()
       })
       .catch(error => console.log(error))
         
    }
        return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Please Register!</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  
                  <Link to='/login'>
            <button className="btn-link label-text-alt link link-hover">Already Have An Account?</button>
            </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default Register;