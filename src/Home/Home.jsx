import { useEffect } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            <section className="bg-white py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-black ml-6">Upcoming Events</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                        <div className="bg-gray-100 p-6 rounded shadow-lg" data-aos="fade-up">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Autumn Music festival</h3>
                            <p className="text-gray-900">Date: June 15, 2023</p>
                            <p className="text-gray-900">Time: 2:00 PM - 5:00 PM</p>
                            <p className="text-gray-900 mt-4">Join us for a day of music, fun, and good vibes! </p>
                            <a href="" className="text-blue-500 mt-4 inline-block">Learn More</a>
                        </div>
                        <div className="bg-gray-100 p-6 rounded shadow-lg" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Art Exhibition Opening</h3>
                            <p className="text-gray-900">Date: July 10, 2023</p>
                            <p className="text-gray-900">Time: 4:00 PM - 7:00 PM</p>
                            <p className="text-gray-900 mt-4">Discover the world of contemporary art at our exhibition opening event. </p>
                            <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
                        </div>

                        <div className="bg-gray-100 p-6 rounded shadow-lg" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-xl font-semibold mb-2 text-gray-700">Culinary Workshop</h3>
                            <p className="text-gray-900">Date: August 20, 2023</p>
                            <p className="text-gray-900">Time: 10:00 AM - 2:00 PM</p>
                            <p className="text-gray-900 mt-4">Learn the art of cooking from expert chefs at our culinary workshop. g elit.</p>
                            <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-gray-100 py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold mb-6 text-black ml-6">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8">

                        <div className="bg-white p-6 rounded shadow-lg" data-aos="fade-right">
                            <p className="text-gray-600 mb-4">Exceptional service and seamless event planning, highly recommend!</p>
                            <p className="text-blue-500 font-semibold">John Doe</p>
                            <p className="text-gray-500">CEO, ABC Company</p>
                        </div>
                                            
                        <div className="bg-white p-6 rounded shadow-lg" data-aos="fade-left">
                            <p className="text-gray-600 mb-4">Impressive attention to detail and a truly memorable event experience!.</p>
                            <p className="text-blue-500 font-semibold">Jane Smith</p>
                            <p className="text-gray-500">COO, XYZ Corporation</p>
                        </div>

                        <div className="bg-white p-6 rounded shadow-lg" data-aos="fade-right">
                            <p className="text-gray-600 mb-4">Efficient, professional, and made our special day truly extraordinary!</p>
                            <p className="text-blue-500 font-semibold">David Brown</p>
                            <p className="text-gray-500">Founder, LMN Enterprises</p>
                        </div>

                        <div className="bg-white p-6 rounded shadow-lg" data-aos="fade-left">
                            <p className="text-gray-600 mb-4">Exceptional service for our companys annual gala event. The teams creativity and attention to detail made our event a resounding success!</p>
                            <p className="text-blue-500 font-semibold">Sarah Johnson</p>
                            <p className="text-gray-500">Marketing Director, EventPro Inc.</p>
                        </div>

                        <div className="bg-white p-6 rounded shadow-lg" data-aos="fade-right">
                            <p className="text-gray-600 mb-4">We could not have asked for a better team to organize our wedding. They went above and beyond to make our special day truly magical. Highly recommended!</p>
                            <p className="text-blue-500 font-semibold">Michael and Emily</p>
                            <p className="text-gray-500">Newlyweds</p>
                        </div>

                        <div className="bg-white p-6 rounded shadow-lg" data-aos="fade-left">
                            <p className="text-gray-600 mb-4">Our charity fundraiser would not have been a success without their expert planning and dedication. They made every detail perfect, and the event exceeded our expectations.</p>
                            <p className="text-blue-500 font-semibold">Alexandra Martinez</p>
                            <p className="text-gray-500">Executive Director, Helping Hands Foundation</p>
                        </div>
                    </div>
                </div>
            </section>


            
            
            <Footer></Footer>
        </div>
    );
};

export default Home;