
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile info update')
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset()
                                    // navigate(from, { replace: true })
                                    Swal.fire({
                                        title: 'success!',
                                        text: 'sign up successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Ok'
                                    })
                                    navigate(from, { replace: true })
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-800'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="photo URl" className="input input-bordered" />
                            {errors.photo && <span className='text-red-800'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-800'>This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 10,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/
                            })} placeholder="password" className="input input-bordered" />

                            {errors.password?.type === "required" && (
                                <p className='text-red-800'>Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-800'>Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-800'>Password must have one uppercase one lowercase one number and one special characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className='text-red-800'>Password must be less then 10 characters</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'><small>Already? <Link to='/login'>Have an account Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;