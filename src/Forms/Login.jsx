import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogIn = e => {
        e.preventDefault();
        console.log(e.currentTarget);

        const form = new FormData(e.currentTarget)  ;
        
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user);
            return (toast("Logged in successfully!"));
        })
        .catch(error => {
            console.error(error);
        })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-6 flex flex-col lg:flex-row content-center max-w-7xl mx-auto lg:grid-cols-2 justify-center">

                <div className=" ">
                        <form onSubmit={handleLogIn} className="card-body w-96 object-center">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-outline">Login</button>
                            <ToastContainer></ToastContainer>
                            </div>
                        </form>   
                </div>

                <div className="hero">
                    <div className="hero-content lg:flex-col-reverse">
                        <div>
                        <h1 className="text-5xl font-bold">Login to Access!</h1>
                        <p className="py-6">Effortlessly log in to our exclusive social event management website.</p>
                        <button className="btn btn-outline">Login with Google</button>
                        <p className="py-6">Do not have a account? PLease proceed to <Link className="text-blue-900 font-bold" to='/register' >Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;