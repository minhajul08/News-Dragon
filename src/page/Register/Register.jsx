import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
    const {createUser} = useContext (AuthContext);
        const handelRegister = e  => {
        e.preventDefault ();
        const form = new FormData (e.currentTarget)
        const name = form.get('name')
        const photo = form.get ('photo')
        const email = form.get('email')
        const password = form.get ('password')
        console.log (name, photo, email, password)
         createUser (email,password)
         .then (result => console.log (result.user))
         .catch (error => console.log (error))
        }
    
    return (
        <div>
            
            <Navbar></Navbar>
                
                <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Register Now!</h1>
            
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <p className="text-xl text-center mt-4 mx-5">Already have an account?<Link className="text-blue-600" to='/login'>Login</Link></p>
            </div>
          </div>
        </div>

        </div>
    );
};

export default Register;