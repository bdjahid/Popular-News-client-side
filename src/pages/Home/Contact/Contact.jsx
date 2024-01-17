import img from '../../../assets/img9.jpg'

const Contact = () => {
    return (
        <div className='my-10'>
            <div className="min-h-screen bg-base-200">
                <p className='text-center text-5xl py-10 font-bold'>Contact Us</p>
                <div className="hero-content flex-col lg:flex-row-reverse pb-20">
                    <div className="text-center lg:text-left">
                        <img className='w-full h-full' src={img} alt="" />
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="input input-bordered" type="text" placeholder="message" name="message" id="" cols="30" rows="10" required ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;