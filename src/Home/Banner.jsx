import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero mix-blend-hard-light" style={{backgroundImage: 'url(https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=2048x2048&w=is&k=20&c=Pi-Ca0DtIojLjWVcy_-LLMk2ISsSf5kg5NJtAntxGOY=)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to PartyPlannerPro</h1>
                    <p className="mb-5 text-white">PartyPlannerPro is your one-stop platform for planning and managing social events with ease. Whether you are organizing a birthday party, wedding, corporate gathering, or any other social occasion, EventMingle simplifies the entire process.</p>

                    <div className="flex justify-center gap-4">
                        <NavLink><button className="btn btn-outline text-white">Login</button></NavLink>
                        <NavLink><button className="btn btn-outline text-white">Register</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;