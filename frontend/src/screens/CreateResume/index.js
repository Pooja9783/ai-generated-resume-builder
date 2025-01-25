import React from "react";
import UserInputs from "./UserInputs";

const CreateResume = () => {
  return (
    <div className="h-full bg-slate-500 p-1 flex justify-between items-center  ">
      <div className="w-1/2 bg-red-500 h-full overflow-y-scroll">
        <UserInputs />
      </div>
      <div className="w-1/2 bg-orange-400">
        <p>Right</p>
      </div>
    </div>
  );
};

export default CreateResume;
