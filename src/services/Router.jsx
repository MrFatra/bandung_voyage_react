import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Destinations from "../pages/Destinations";
import { ErrorPage, NotFoundPage } from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />
    },
    {
        path: "/destinations",
        element: <Destinations />,
        errorElement: <ErrorPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
])