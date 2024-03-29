import { useContext } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const { createUser, locationState } = useContext(AuthContext); 
    console.log("location in register page ", locationState );
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

    
        const passRegex =  /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        if (!passRegex.test(password)) {
            return (toast.warning("Password must be at least 6 characters long, contain a capital letter and a special character."));
        }

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            navigate(locationState? locationState : '/')
            return (toast.success("Registered with Google!"));
        })
        .catch(error => {
            console.error(error);
            if (error.code === "auth/email-already-in-use") {
                toast.error("Email is already in use!");
              } 
        
        })
    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-6 flex  flex-col lg:flex-row  content-center max-w-7xl mx-auto lg:grid-cols-2 h-full justify-center">

                <div className=" ">
                        <form onSubmit={handleRegister} className="card-body w-96 object-center">
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
                            </div>
                            <div className="form-control mt-6">
                            <button className="btn btn-outline">Register</button>
                            </div>
                        </form>  
                        {/* <ToastContainer></ToastContainer>  */}
                </div>

                <div className="hero">
                    <div className="hero-content lg:flex-col-reverse">
                        <div>
                        <h1 className="text-5xl font-bold">Register to Explore!</h1>
                        <p className="py-6">Effortlessly log in to our exclusive social event management website.</p>
                        {/* <button onClick={handleRegisterWithGoogle}  className="btn btn-outline">Register with Google</button>
                        <ToastContainer></ToastContainer> */}
                        <p className="py-6">Already have a account? PLease proceed to <Link className="text-blue-900 font-bold" to='/login' >Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;