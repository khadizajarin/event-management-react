import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () => {
            console.log('logged out successful');
            toast.success("Logging out is successful!")
        })
        .catch( error => {
            console.error(error);
        })

    }

    const links = <>
        <li><NavLink to = "/" style={({ isActive }) => ({ 
                            color: isActive ? 'Blue' : '' })}>Home</NavLink></li>
        <li><NavLink to = "/services" style={({ isActive }) => ({ 
                            color: isActive ? 'Blue' : '' })}>Services</NavLink></li>
        <li><NavLink to = "/about" style={({ isActive }) => ({ 
                            color: isActive ? 'Blue' : '' })}>About</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to = "/booking" style={({ isActive }) => ({ 
                            color: isActive ? 'Blue' : '' })}>Booking</NavLink></li>
                <li><NavLink to = "/profile" style={({ isActive }) => ({ 
                            color: isActive ? 'Blue' : '' })}>Profile</NavLink></li>
            </>
        }
    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <ul tabIndex={0} className="menu flex flex-row mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
                    {links}
                </ul>
            </div>


            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">PartyPlannerPro</a>
            </div>


            <div className="navbar-end flex flex-col  lg:flex-row gap-6">

                {
                    user && 
                    <>
                        <p className="md:block hidden">{user.email}</p>
                        <button 
                            className="btn btn-outline "
                            onClick={handleLogOut}
                        >Log Out</button>
                        <ToastContainer></ToastContainer>
                    </>
                }
                <button className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;