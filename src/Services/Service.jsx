

const Service = ({events}) => {
    const {id,name,price, button, image, description} = events;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className="text-xl">{price}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;