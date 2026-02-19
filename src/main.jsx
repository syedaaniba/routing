import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx"; 
import About from "./components/About/About.jsx";
import Footer from "./components/footer/Footer.jsx"; 
import Contact from "./Contactus/contact.jsx";
import User from "./components/User/User.jsx";
import GitHub from "./components/githubb/github.jsx";  // ✅ consistent name

// Define routes
const router = createBrowserRouter([
  {
    path: "/", // top-level element
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "user/:userid",
        element: <User/>
      },
      {
        path: "github",
        element: <GitHub/>   // ✅ matches the import above
      }
    ],
  },
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
