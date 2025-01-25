import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center h-full">
      <Link to="/create-resume">
        <button className="bg-slate-400 rounded-md p-2">
          Create Your Resume
        </button>
      </Link>
    </div>
  );
}

export default Home;
