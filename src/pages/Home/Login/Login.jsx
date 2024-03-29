import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import SocialLogin from '../../../components/SocialLogin/SocialLogin';



const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [disabled, setDisAbled] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";



    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = (e) => {
        e.preventDefault();
        //  const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                Swal.fire({
                    title: 'success!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
            setDisAbled(false)
        }
        else {
            setDisAbled(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>

                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type captcha" className="input input-bordered" />
                            {/* <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'><small>New Here? <Link to='/signup'>Create an account Sign Up</Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
