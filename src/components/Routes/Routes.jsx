import { createBrowserRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
