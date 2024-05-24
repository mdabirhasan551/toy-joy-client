/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";
import Authprovider from "./components/Providers/Authprovider.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </ThemeProvider>
  </React.StrictMode>
);
