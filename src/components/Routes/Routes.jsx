import { createBrowserRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blogs from "../Blogs/Blogs";
import SingleBlog from "../Blogs/SingleBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://toy-joy.vercel.app"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://toy-joy.vercel.app/blogs"),
      },
      {
        path: "/blogs/:blogId",
        element: <SingleBlog />,
        loader: ({ params }) =>
          fetch(`https://toy-joy.vercel.app/blogs/${params.blogId}`),
      },
    ],
  },
]);

export default router;
