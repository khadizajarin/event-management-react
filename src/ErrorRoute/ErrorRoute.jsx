
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const ErrorRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" flex items-center justify-center">
                <h2 className="text-3xl">Oops!!! Content not found!!!</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorRoute;