/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";



const ServiceDetails = () => {
    const events = useLoaderData();
    
    const{id} = useParams();

    const event = events.find(event => event.id == id);

    console.log(events);
    console.log(event);
    return (
        <div>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-3 max-w-7xl mx-auto my-11">
                <div >
                    <img src={event.image} alt="" className="object-center rounded-2xl" />
                </div>
                <div className="col-span-2 ml-10">
                    <p className="text-5xl">{event.name}</p>
                    <p className="text-3xl mt-4">{event.price}</p>
                    <p className="mt-4">{event.description}</p>
                    <p className="mt-4 btn btn-outline">{event.button}</p>
                </div>
            
            </div>


            <Footer></Footer>
            
        </div>
    );
};

export default ServiceDetails;