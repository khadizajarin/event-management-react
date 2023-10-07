import { useLoaderData } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Service from "./Service";


const Services = () => {
    const events = useLoaderData();
    console.log(events);
    return (
        <div>
            <Navbar></Navbar>

           <div>
            <div className=" mt-14 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        events.map(event => <Service
                        key={event.id}
                        events = {event}
                        ></Service>)
                    }
                </div>
           </div>

        </div>
    );
};

export default Services;