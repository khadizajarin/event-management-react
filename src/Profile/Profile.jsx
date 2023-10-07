import { useContext } from "react";
import Navbar from "../Home/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-6xl font-bold text-center mt-10">Your Details</h2>

                <div className="card card-compact bg-base-100 mt-10">
                    <figure className="w-full"><img src={user.photoURL} alt="User's Photo" /></figure>
                    <div className="card-body text-center">
                        <h2 className="font-bold text-2xl">{user.displayName}</h2>
                        <p className="font-bold text-center">{user.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;