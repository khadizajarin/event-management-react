
import { Link } from "react-router-dom";

const Service = ({ events }) => {
  const { id, name, price, image, description ,button} = events;

  return (
    <div>
      <Link to={`/events/${id}`}>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
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
