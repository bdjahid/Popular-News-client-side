import { Link } from "react-router-dom";



const NewsCard = ({ paper }) => {
    const { title, image, description, publisher_name } = paper
    return (
        <div className="card-side bg-base-100 shadow-xl">
            <div>
                <figure><img src={image} alt="Movie" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{publisher_name}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;