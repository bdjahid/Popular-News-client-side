import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import '../AllArticles/AllArticles.css';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddArticles = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();


    const onSubmit = async (data) => {
        console.log(data)
        // image upload
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            const newsItem = {
                description: data.description,
                publisher: data.publisher,
                tags: data.tags,
                title: data.title,
                image: res.data.data.display_url
            }
            const newsRes = await axiosSecure.post('/news', newsItem);
            console.log(newsRes.data)
            if (newsRes.data.insertedId) {
                // show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

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
                                <option value="AI">AI</option>
                                <option value="Education">Education</option>
                                <option value="Technology">Technology</option>
                                <option value="Politics">Politics</option>
                                <option value="Play">Play</option>
                                <option value="Robot">Robot</option>
                                <option value="Games">Games</option>
                                <option value="Football">Football</option>
                                <option value="Creative">Creative</option>
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
                                <option value="Jimmy Dane">Jimmy Dane</option>
                                <option value="Jennifer Wood">Jennifer Wood</option>
                                <option value="system">system</option>
                                <option value="Robot">Robot</option>
                                <option value="Theo Minh Châu">Theo Minh Châu</option>
                                <option value="Ukrainska Pravda">Ukrainska Pravda</option>
                                <option value="Daniel Deangelo">Daniel Deangelo</option>
                                <option value="Reuters">Reuters</option>
                                <option value="John Pike">John Pike</option>
                                <option value="MarketScreener">MarketScreener</option>
                                <option value="RTTNews">RTTNews</option>
                                <option value="Kumar Natasha">Kumar Natasha</option>
                                <option value="The Philadelphia Inquirer">The Philadelphia Inquirer</option>
                                <option value="Presstv">Presstv</option>
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