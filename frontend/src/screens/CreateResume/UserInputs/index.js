import React, { useState } from "react";

const UserInputs = () => {
  const [workExperiences, setWorkExperiences] = useState([
    { company: "", date: "", tasks: [""] },
  ]);

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  const handleTaskChange = (experienceIndex, taskIndex, value) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[experienceIndex].tasks[taskIndex] = value;
    setWorkExperiences(updatedExperiences);
  };

  const addTask = (experienceIndex) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[experienceIndex].tasks.push("");
    setWorkExperiences(updatedExperiences);
  };

  const removeTask = (experienceIndex, taskIndex) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[experienceIndex].tasks.splice(taskIndex, 1);
    setWorkExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { company: "", date: "", tasks: [""] },
    ]);
  };

  const removeExperience = (index) => {
    if (workExperiences.length > 1) {
      const updatedExperiences = [...workExperiences];
      updatedExperiences.splice(index, 1);
      setWorkExperiences(updatedExperiences);
    }
  };

  const [educationList, setEducationList] = useState([
    { schoolName: "", qualification: "", date: "" },
  ]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducationList = [...educationList];
    updatedEducationList[index][field] = value; // Update the specific field
    setEducationList(updatedEducationList);
  };

  const addEducation = () => {
    // Validate the last entry before adding a new one
    const lastEducation = educationList[educationList.length - 1];
    if (
      lastEducation.schoolName.trim() &&
      lastEducation.qualification.trim() &&
      lastEducation.date.trim()
    ) {
      setEducationList([
        ...educationList,
        { schoolName: "", qualification: "", date: "" },
      ]);
    } else {
      alert(
        "Please fill out all fields in the current education entry before adding another."
      );
    }
  };

  const removeEducation = (index) => {
    // Prevent removal if there's only one entry
    if (educationList.length > 1) {
      const updatedEducationList = [...educationList];
      updatedEducationList.splice(index, 1); // Remove the specific entry
      setEducationList(updatedEducationList);
    } else {
      alert("You must have at least one education entry.");
    }
  };

  const [interests, setInterests] = useState([""]); // Start with one blank entry

  const handleInterestChange = (index, value) => {
    const updatedInterests = [...interests];
    updatedInterests[index] = value;
    setInterests(updatedInterests);
  };

  const addInterest = () => {
    // Ensure the last interest field is filled before adding a new one
    if (interests[interests.length - 1].trim() !== "") {
      setInterests([...interests, ""]); // Add a new blank interest field
    } else {
      alert("Please fill out the current interest before adding another.");
    }
  };

  const removeInterest = (index) => {
    if (interests.length > 1) {
      const updatedInterests = [...interests];
      updatedInterests.splice(index, 1); // Remove the specific interest
      setInterests(updatedInterests);
    } else {
      alert("You must have at least one interest.");
    }
  };

  const [achievement, setAchievements] = useState([""]); // Start with one blank entry

  const handleAchievementsChange = (index, value) => {
    const updatedAchievement = [...achievement];
    updatedAchievement[index] = value;
    setAchievements(updatedAchievement);
  };

  const addAchievements = () => {
    // Ensure the last interest field is filled before adding a new one
    if (achievement[achievement.length - 1].trim() !== "") {
      setAchievements([...achievement, ""]); // Add a new blank interest field
    } else {
      alert("Please fill out the current interest before adding another.");
    }
  };

  const removeAchievements = (index) => {
    if (achievement.length > 1) {
      const updatedAchievement = [...achievement];
      updatedAchievement.splice(index, 1); // Remove the specific interest
      setAchievements(updatedAchievement);
    } else {
      alert("You must have at least one interest.");
    }
  };

  return (
    <div className="" >
      <p className="text-center"> Create You Resume Here!</p>
      <div className="">
        <form>
          <div className="p-2">
            <label>Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="block w-full p-1"
            />
          </div>
          <div className="p-2">
            <label>Designation</label>
            <input
              id="designation"
              name="designation"
              type="text"
              placeholder="Enter Your Designation"
              className="block w-full p-1"
            />
          </div>
          <div className="p-2">
            <label>Professional Summary</label>
            <textarea
              id="designation"
              name="designation"
              type="text"
              placeholder="Enter Your Designation"
              className="block w-full p-1"
              cols={2}
            />
          </div>
          <div className="p-2">
            <label>Work Experience</label>
            {workExperiences.map((experience, expIndex) => (
              <div
                key={expIndex}
                className="border border-black-600 py-3 px-1 mb-4 rounded"
              >
                {/* Company Name */}
                <input
                  type="text"
                  value={experience.company}
                  onChange={(e) =>
                    handleExperienceChange(expIndex, "company", e.target.value)
                  }
                  placeholder="Enter Your Company Name"
                  className="block w-full p-1 mb-2 border rounded"
                />

                <div className="flex justify-between">
                  <input
                    type="text"
                    placeholder="Enter Your Designation"
                    className="block w-[49%] p-1 mb-2 border rounded"
                  />

                  <input
                    type="date"
                    value={experience.date}
                    onChange={(e) =>
                      handleExperienceChange(expIndex, "date", e.target.value)
                    }
                    className="block w-[49%] p-1 mb-2 border rounded"
                  />
                </div>

                {/* Tasks */}
                <label className="block font-bold mt-4">
                  List of Tasks/Work Done
                </label>
                {experience.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center gap-2 my-2">
                    <input
                      type="text"
                      value={task}
                      onChange={(e) =>
                        handleTaskChange(expIndex, taskIndex, e.target.value)
                      }
                      placeholder={`Task ${taskIndex + 1}`}
                      className="block w-full p-1 border rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeTask(expIndex, taskIndex)}
                      className="bg-red-500 text-white font-bold px-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addTask(expIndex)}
                  className="bg-blue-500 text-white font-bold px-4 py-1 mt-2 rounded"
                >
                  Add Task
                </button>

                {/* Remove Work Experience */}
                <button
                  type="button"
                  onClick={() => removeExperience(expIndex)}
                  disabled={experience.length === 1} // Disable the button if it's the last entry
                  className={`${
                    experience.length === 1
                      ? "bg-gray-400"
                      : "bg-red-500 hover:bg-red-700"
                  } text-white font-bold px-2 rounded mt-2`}
                >
                  Remove Work Experience
                </button>
              </div>
            ))}

            {/* Add Work Experience */}
            <button
              type="button"
              onClick={addExperience}
              className="bg-green-500 text-white font-bold px-4 py-2 mt-4 rounded"
            >
              Add Work Experience
            </button>
          </div>
          <div className="p-2">
            <label>Skills</label>
            <input
              id="skills"
              name="skills"
              type="text"
              placeholder="Enter Your Skills"
              className="block w-full p-1"
            />
          </div>
          <div className="p-2">
            <label className="block font-bold mb-2">Education</label>
            {educationList.map((education, index) => (
              <div
                key={index}
                className="border border-black-600 py-3 px-1 mb-4 rounded"
              >
                <input
                  type="text"
                  value={education.schoolName}
                  onChange={(e) =>
                    handleEducationChange(index, "schoolName", e.target.value)
                  }
                  placeholder="Enter Your College Or School Name"
                  className="block w-full p-1 mb-2 border rounded"
                />
                <div className="flex justify-between my-2">
                  <input
                    type="text"
                    value={education.qualification}
                    onChange={(e) =>
                      handleEducationChange(
                        index,
                        "qualification",
                        e.target.value
                      )
                    }
                    placeholder="Enter Your Qualification"
                    className="block w-[49%] p-1 border rounded"
                  />
                  <input
                    type="date"
                    value={education.date}
                    onChange={(e) =>
                      handleEducationChange(index, "date", e.target.value)
                    }
                    className="block w-[49%] p-1 border rounded"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  disabled={educationList.length === 1} // Disable the button if it's the last entry
                  className={`${
                    educationList.length === 1
                      ? "bg-gray-400"
                      : "bg-red-500 hover:bg-red-700"
                  } text-white font-bold px-2 rounded mt-2`}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addEducation}
              className="bg-blue-500 text-white font-bold px-4 py-1 rounded"
            >
              Add Education
            </button>
          </div>
          <div className="p-2">
            <label className="block font-bold mb-2">Interests</label>
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => handleInterestChange(index, e.target.value)}
                  placeholder="Enter Your Interest"
                  className="block w-full p-1 border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeInterest(index)}
                  disabled={interests.length === 1} // Prevent removing the last entry
                  className={`ml-2 ${
                    interests.length === 1
                      ? "bg-gray-400"
                      : "bg-red-500 hover:bg-red-700"
                  } text-white font-bold px-2 rounded`}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addInterest}
              className="bg-blue-500 text-white font-bold px-4 py-1 rounded mt-2"
            >
              Add Interest
            </button>
          </div>
          <div className="p-2">
            <label className="block font-bold mb-2">Achievement</label>
            {achievement.map((achievement, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) =>
                    handleAchievementsChange(index, e.target.value)
                  }
                  placeholder="Enter Your Achievement"
                  className="block w-full p-1 border rounded"
                />
                <button
                  type="button"
                  onClick={() => removeAchievements(index)}
                  disabled={achievement.length === 1} // Prevent removing the last entry
                  className={`ml-2 ${
                    achievement.length === 1
                      ? "bg-gray-400"
                      : "bg-red-500 hover:bg-red-700"
                  } text-white font-bold px-2 rounded`}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addAchievements}
              className="bg-blue-500 text-white font-bold px-4 py-1 rounded mt-2"
            >
              Add Achievement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInputs;
