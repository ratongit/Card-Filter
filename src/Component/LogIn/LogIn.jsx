
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { useContext } from 'react';


const LogIn = () => {
    const {singIn, googleSingIn} = useContext(AuthContext)
    const handleLogIn = event =>{
        event.preventDefault()

        const form = event.target 
        const email = form.email.value 
        const password = form.password.value  
       singIn(email, password)
       .then(result =>{
        const logged = result.user 
        console.log(logged)
       form.reset()
       })
       .catch(error =>console.log(error))

    }
    const googleSignUp = () =>{
        googleSingIn()
       .then(result=> {
        const logged = result.user 
        console.log(logged)
       })
       .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold mb-4">Please Log In!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
     <div className='mb-4 ml-3'>
     <Link to='/register'>
      <button className="btn btn-link">New to auth Master !! Register Now</button>
      </Link>

      <div>
        <button onClick={googleSignUp} className='btn btn-primary'>Google</button>
      </div>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default LogIn;