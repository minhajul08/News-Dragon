import { Link,useLocation,useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const Login = () => {
  const {login} = useContext (AuthContext)
  const location = useLocation ();
  const navigate = useNavigate ();
  console.log ('location in location page',location)
    const handelLogin = e  => {
    e.preventDefault ();
    const form = new FormData (e.currentTarget)
    const email = form.get('email')
        const password = form.get ('password')
        console.log ( email, password)
    login (email,password)
    .then (result => {
      console.log (result.user)

      navigate (location?.state ? location.state : '/');
    })
    .catch (error => {
      console.error (error)
    })
    
    }
    return (
        <div>
            <Navbar></Navbar>
                
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-xl text-center mt-4 mx-5">Don't have an account <Link className="text-blue-600 font-bold " to='/register'>Register</Link></p>
    </div>
  </div>
</div>
        </div>
    
    );
};

export default Login;