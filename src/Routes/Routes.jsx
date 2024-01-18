import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddArticles from './../pages/Home/AddArticles/AddArticles';
import MyArticles from './../pages/Home/MyArticles/MyArticles';
import PremiumArticles from './../pages/Home/PremiumArticles/PremiumArticles';
import Subscription from './../pages/Home/Subscription/Subscription';
import Login from "../pages/Home/Login/Login";
import SignUp from './../pages/Home/SignUp/SignUp';
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Details from "../pages/Home/Details/Details";
import Dashboard from "../Layout/Dashboard/Dashboard";
// import AllUser from "../pages/DashBoard/AllUser/AllUser";
import AllArticle from "../pages/Dashboard/AllArticle/AllArticle";
import AddPublisher from "../pages/Dashboard/AddPublisher/AddPublisher";
import AllPublisher from './../pages/Home/AllPublisher/AllPublisher';
import AllArticles from './../pages/Home/AllArticles/AllArticles';
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allArticles",
                element: <AllArticles></AllArticles>,
            },
            {
                path: "/addArticles",
                element: <AddArticles></AddArticles>,
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: "/myArticles",
                element: <MyArticles></MyArticles>,
            },
            {
                path: "/allPublisher",
                element: <AllPublisher></AllPublisher>,
            },
            {
                path: "/premiumArticles",
                element: <PremiumArticles></PremiumArticles>,
            },
            {
                path: "/subscription",
                element: <Subscription></Subscription>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ]
    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // {
            //     path: 'allUser',
            //     element: <AllUser></AllUser>
            // },
            {
                path: 'allArticles',
                element: <AllArticle></AllArticle>
            },
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'addPublisher',
                element: <AddPublisher></AddPublisher>
            }
        ]
    }

]);
export default router;