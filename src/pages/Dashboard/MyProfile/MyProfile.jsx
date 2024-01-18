import useAuth from "../../../hooks/useAuth";



const MyProfile = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div>
            <div className="card card-side bg-base-100">
                <figure><img className="w-96" src={user?.photoURL} alt="Movie" /></figure>
                <div className="ms-20 space-y-4">
                    <h2 className="card-title">Name : {user?.displayName}</h2>
                    <p>Email : {user?.email}</p>
                    <p>Phone : {user?.phone}</p>
                    <div className="">
                        <button className="btn btn-primary">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;