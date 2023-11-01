import { Navigate, useRoutes } from 'react-router-dom';

// Layout
import DashboardLayout from "../Layouts";

// Components
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import ForgetPassword from '../Components/ForgetPassword';
import PageNotFound from '../Components/PageNotFound';
import Analytics from '../Components/Analytics';
import Data from '../Components/Data';


const Router = () => {

    return useRoutes([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: "forget-password",
            element: <ForgetPassword />
        },
        {
            path: 'register',
            element: <SignUp />
        },
        {
            path: 'account',
            element: <DashboardLayout />,
            children: [
                { path: "", element: <Navigate to="/account/analytics" /> },
                { path: "analytics", element: <Analytics /> },
                { path: "data", element: <Data /> },
            ]
        },
        {
            path: 'analytics',
            element: <Navigate to="/account/analytics" />
        },
        {
            path: '*',
            element: <PageNotFound />
        },
    ])
}

export default Router;