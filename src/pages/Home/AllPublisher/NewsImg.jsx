

const NewsImg = ({ paper }) => {
    const { image, publisher_name } = paper
    return (
        <div className="card card-compact h-60 w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{publisher_name}</h2>
            </div>
        </div>

    );
};

export default NewsImg;