import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from "react-router-dom";

const Service = ({ events }) => {
  const { id, name, price, image, description ,button} = events;

  return (
    <div data-aos="fade-up" data-aos-offset="200" >
      <Link to={`/events/${id}`}>
        <div className="card card-compact h-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} className="h-96 w-full" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <p className="text-xl">{price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline">{button}</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
