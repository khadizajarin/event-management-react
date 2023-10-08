import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Service from "./Service";
import Footer from "../Home/Footer";


const Services = () => {
    const events = useLoaderData();
    // console.log(events);
    return (
        <div>
            <Navbar></Navbar>

           <div className="max-w-7xl mx-auto">
                <div className=" mt-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                    {
                        events.map(event => <Service
                        key={event.id}
                        events = {event}
                        ></Service>)
                    }
                </div>
           </div>
                    
            <Footer></Footer>            
        </div>
    );
};

export default Services;