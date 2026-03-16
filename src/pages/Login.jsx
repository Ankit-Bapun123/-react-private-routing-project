import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dbData = JSON.parse(localStorage.getItem("logindetails")) || {};

  const token = "3okr3k3ik2poijldkfdkfskefpoekpeok";

  const { email, password } = loginData;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogindata({ ...loginData, [name]: value });
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (loginData.email === dbData.email && loginData.password === dbData.password) {
      setLogindata({
        email: "",
        password: "",
      });

      toast.success("Login successfully");

      localStorage.setItem("jwttoken", token);

      navigate("/dashboared");
    } else {
      toast.warning("Invalid credentials");
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome Back 👋
        </h2>

        <form className="space-y-4" onSubmit={handleForm}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              name="email"
              value={email}
              onChange={handleInput}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              name="password"
              value={password}
              onChange={handleInput}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-xl font-semibold hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?
          <Link to="/register" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;