import { createBrowserRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('http://localhost:5000/')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
