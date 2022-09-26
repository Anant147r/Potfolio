import React from "react";
import styles from "./Project.module.css";
const Project = (props) => {
  const { projectName, projectURL, codeURL, backgroundImage } = props;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ${styles.projectCover}`}
    >
      {/* Hover Effects */}
      <div className={`opacity-0 group-hover:opacity-100 `}>
        <span className="text-2xl font-bold text-white tracking-wider">
          {projectName}
        </span>
        <div className="pt-8 text-center">
          <a href={projectURL}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={codeURL}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
