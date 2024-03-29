import { Link } from "react-router-dom";



const NewsCard = ({ paper }) => {

    const { _id, title, image, description, publisher_name } = paper

    // console.log('des', description.slice(0, 10))
    return (
        <div className="card-side bg-base-100 shadow-xl">
            <div>
                <figure><img src={image} alt="Movie" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{publisher_name}</p>
                <p>{description ? description.slice(0, 100) : 'not found'}</p>
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-info">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default NewsCard;