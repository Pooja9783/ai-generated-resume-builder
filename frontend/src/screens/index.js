import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Img from "../assets/sign-up-form.png";

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState("Login");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center justify-center h-[100%] w-full  text-gray-50">
      <div className="flex flex-col items-center text-center bg-gray-700 p-8 rounded-lg shadow-md">
        <p className="text-xl font-bold mb-4">Want to Create an Impressive Resume?</p>
        <p className="text-sm mb-6">
          Design stunning, professional resumes effortlessly with AI-powered
          tools and beautiful templates.
        </p>
      </div>
      <div className="flex flex-col items-center bg-gray-200 text-gray-800 border-2 border-gray-300 p-8 rounded-lg shadow-md ml-8">
        <img src={Img} alt="Sign Up Illustration" className="w-40 h-40 mb-6" />
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "Login"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => handleTab("Login")}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "Sign Up"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => handleTab("Sign Up")}
          >
            Sign Up
          </button>
        </div>
        <div>{activeTab === "Login" ? <Login /> : <SignUp />}</div>
      </div>
    </div>
  );
};

export default AuthScreen;
