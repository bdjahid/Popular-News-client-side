import BreakingNews from "./BreakingNews";


const AllPublisher = () => {
    return (
        <div className="my-10">
            <div className="text-center">
                <h1 className="text-5xl font-bold">All Publisher</h1>
                <p className="text-2xl font-bold">Articles Curated By Different Publishers</p>
            </div>
            <BreakingNews></BreakingNews>
        </div>
    );
};

export default AllPublisher;