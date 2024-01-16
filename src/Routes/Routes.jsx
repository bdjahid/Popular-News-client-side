import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddArticles from './../pages/Home/AddArticles/AddArticles';
import AllArticles from './../pages/Home/AllArticles/AllArticles';
import AllPublisher from './../pages/Home/AllPublisher/AllPublisher';
import MyArticles from './../pages/Home/MyArticles/MyArticles';
import PremiumArticles from './../pages/Home/PremiumArticles/PremiumArticles';
import Subscription from './../pages/Home/Subscription/Subscription';
import Dashboard from './../pages/Home/Dashboard/Dashboard';
import Login from "../pages/Home/Login/Login";
import SignUp from './../pages/Home/SignUp/SignUp';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addArticles",
                element: <AddArticles></AddArticles>,
            },
            {
                path: "/allArticles",
                element: <AllArticles></AllArticles>,
            },
            {
                path: "/allPublisher",
                element: <AllPublisher></AllPublisher>,
            },
            {
                path: "/myArticles",
                element: <MyArticles></MyArticles>,
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
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
        ]

    },
]);
export default router;