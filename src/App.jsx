import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./components/dashboard/Dashboard";
import AllUsers from "./components/dashboardpages/AllUsers";
import AllProducts from "./components/dashboardpages/AllProducts";
import Cart from "./components/dashboardpages/Cart";
import Profile from "./components/dashboardpages/Profile";
import Settings from "./components/dashboardpages/Settings";

import ProtectedRoute from "./privaterouting/ProtectedRoute";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
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
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "/dashboard/allusers",
              element: <AllUsers />,
            },
            {
              path: "/dashboard/allproducts",
              element: <AllProducts />,
            },
            {
              path: "/dashboard/cart",
              element: <Cart />,
            },
            {
              path: "/dashboard/profile",
              element: <Profile />,
            },
            {
              path: "/dashboard/settings",
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