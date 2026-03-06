import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboared from "./components/Dashboared/Dashboared";
import Allusers from "./components/dashboaredpages/AllUsers";
import AllProducts from "./components/dashboaredpages/AllProducts";
import Cart from "./components/dashboaredpages/Cart";
import Profile from "./components/dashboaredpages/Profile";
import Settings from "./components/dashboaredpages/Settings";
import ProtectedRoute from "./privaterouting/ProtectedRoute";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/service",
          element: (
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          ),
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
          path: "/dashboared",
          element: (
            <ProtectedRoute>
              <Dashboared />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/dashboared/allusers",
              element: <Allusers />,
            },
            {
              path: "/dashboared/allproducts",
              element: <AllProducts />,
            },
            {
              path: "/dashboared/cart",
              element: <Cart />,
            },
            {
              path: "/dashboared/profile",
              element: <Profile />,
            },
            {
              path: "/dashboared/settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
