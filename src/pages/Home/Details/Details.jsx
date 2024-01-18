import { useLoaderData } from "react-router-dom";


const Details = () => {
    const news = useLoaderData();
    const { title, image, description, publisher_name, author_img, tags, views, published_date, author_name } = news
    return (
        <div className="card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-3xl">Publisher:{publisher_name}</p>
                <div>
                    <p className="mb-4">Author : {author_name}</p>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={author_img} />
                        </div>
                    </div>
                </div>
                <p>{description}</p>
                <p>Tags : {tags}</p>
                <p>Total Views : {views}</p>
                <p>Posted Date : {published_date}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Details;