import { Link } from "react-router-dom";
import '../AllArticles/AllArticles.css';


const Subscription = () => {
    return (
        <div>
            <div className="hero min-h-screen imgBg">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">All Articles</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/">
                            <button className="btn btn-ghost">Home | Articles</button>
                        </Link>
                    </div>
                </div>
            </div>
            <form className="card-body mx-40 space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email address</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <select className="select select-bordered w-full">
                        <option disabled selected value="1">1 minute (Assignment Checking)</option>
                        <option value="5">5 days</option>
                        <option value="10">10 days</option>
                    </select>
                </div>
                <div>
                    <p className="text-3xl font-bold">Total : </p>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Subscribe</button>
                </div>
            </form>
        </div>
    );
};

export default Subscription;