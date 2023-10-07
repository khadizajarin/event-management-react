import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <section className="bg-gray-100 py-10">
                <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-black ">What Our Clients Say</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="bg-white p-6 rounded shadow-lg">
                    <p className="text-gray-600 mb-4">Exceptional service and seamless event planning, highly recommend!</p>
                    <p className="text-blue-500 font-semibold">John Doe</p>
                    <p className="text-gray-500">CEO, ABC Company</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded shadow-lg">
                    <p className="text-gray-600 mb-4">Impressive attention to detail and a truly memorable event experience!.</p>
                    <p className="text-blue-500 font-semibold">Jane Smith</p>
                    <p className="text-gray-500">COO, XYZ Corporation</p>
                    </div>
                    

                    <div className="bg-white p-6 rounded shadow-lg">
                    <p className="text-gray-600 mb-4">Efficient, professional, and made our special day truly extraordinary!</p>
                    <p className="text-blue-500 font-semibold">David Brown</p>
                    <p className="text-gray-500">Founder, LMN Enterprises</p>
                    </div>
                </div>
                </div>
            </section>


            <section className="bg-white py-10">
                <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-black">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-100 p-6 rounded shadow-lg">
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">Event Title</h3>
                    <p className="text-gray-900">Date: June 15, 2023</p>
                    <p className="text-gray-900">Time: 2:00 PM - 5:00 PM</p>
                    <p className="text-gray-900 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    <a href="" className="text-blue-500 mt-4 inline-block">Learn More</a>
                    </div>
                </div>
                </div>
            </section>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;