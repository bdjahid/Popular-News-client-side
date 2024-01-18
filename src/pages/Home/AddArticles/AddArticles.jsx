import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../AllArticles/AllArticles.css';

const AddArticles = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data) => {
        console.log(data)

    }

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
            <div className="my-10 mx-40">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="from-control w-full my-2">
                        <label className="form-control w-full max-w-xs">
                            <span className="label-text mb-3">Title</span>
                        </label>
                        <input {...register("title", { required: true })}
                            type="text" placeholder="Title" className="input input-bordered w-full" />
                    </div>

                    <div className="flex gap-6">
                        {/* Tags */}
                        <div className="from-control w-full my-6">
                            <label className="form-control w-full max-w-xs">
                                <span className="label-text mb-3">Tags</span>
                            </label>
                            <select defaultValue="default"  {...register("tags")}
                                className="select select-bordered w-full">
                                <option value="default" disabled>Select ....</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                                <option value="dessert">dessert</option>
                            </select>
                        </div>
                        {/* Publisher */}
                        <div className="from-control w-full my-6">
                            <label className="form-control w-full max-w-xs">
                                <span className="label-text mb-3">Publisher</span>
                            </label>
                            <select defaultValue="default"  {...register("publisher")}
                                className="select select-bordered w-full">
                                <option value="default" disabled>Publisher ....</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                                <option value="dessert">dessert</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text mb-3">Description</span>
                            </div>
                            <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                        </label>
                    </div>

                    <div className="form-control">
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full my-4" />
                    </div>
                    <button type="submit" className="btn btn-outline w-full">Add Article</button>
                </form>
            </div>
        </div>
    );
};

export default AddArticles;