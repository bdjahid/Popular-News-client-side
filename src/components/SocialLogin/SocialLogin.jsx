
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        // navigate(from, { replace: true })
                        Swal.fire({
                            title: 'success!',
                            text: 'google Login successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    })
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <div className="text-center">
                <button onClick={handleGoogle} className="btn btn-ghost"> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;




