import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className='flex'>
            <div className="w-64 min-h-full bg-orange-300">
                <ul>
                    <li><NavLink to='/dashboard/allUser'>All User</NavLink></li>
                    <li><NavLink to='/dashboard/allArticles'>All Articles</NavLink></li>
                    <li><NavLink to='/dashboard/addPublisher'>Add
                        Publisher
                    </NavLink></li>
                    <li><NavLink to='/dashboard/myProfile'>My Profile
                    </NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;