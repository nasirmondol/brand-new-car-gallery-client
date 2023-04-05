import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import NotFound from "../Shared/NotFound/NotFound";
import Pay from "../Page/Pay/Pay";
import Purchase from "../Page/Purchase/Purchase";
import About from "../Page/About/About";
import Details from "../Page/Details/Details";
import Explore from "../Page/Explore/Explore";
import Login from "../Page/Home/Login/Login/Login";
import SignUp from "../Page/Home/Login/Login/SignUp";
import PrivateRoute from "../Page/Route/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/pay',
                element: <Pay></Pay>
            },
            {
                path: '/purchase',
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/details',
                element: <Details></Details>
            },
            {
                path: '/explore',
                element: <Explore></Explore>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;