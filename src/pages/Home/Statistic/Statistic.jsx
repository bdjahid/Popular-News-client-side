

const Statistic = () => {
    return (
        <div className="bg-black">
            <div className="text-center py-28">
                <h1 className="text-5xl font-bold text-white">Statistic</h1>
                <p className="text-2xl font-semibold text-white">Statistical Analysis And Findings</p>
                <div className="lg:flex justify-around text-5xl font-bold text-white mt-20">
                    <div>
                        <p className="mb-5">10</p>
                        <p>All User</p>
                    </div>
                    <div>
                        <p className="mb-5">5</p>
                        <p>Basic User</p>
                    </div>
                    <div>
                        <p className="mb-5">2</p>
                        <p>Premium User</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;