import React from "react";

const AnswerChooseOne = () => {
  return (
    <div className="w-3/4 mx-auto my-3">
      <div className="flex items-center space-x-3 my-5">
        <h2 className="text-2xl font-bold">Python</h2>
        <progress
          className="progress progress-success w-10/12"
          value="50"
          max="100"
        ></progress>
        <p className="text-lg font-bold">50%(2)</p>
      </div>
      <div className="flex items-center space-x-3 my-5">
        <h2 className="text-2xl font-bold">Golang</h2>
        <progress
          className="progress progress-info w-10/12"
          value="50"
          max="100"
        ></progress>
        <p className="text-lg font-bold">50%(2)</p>
      </div>
    </div>
  );
};

export default AnswerChooseOne;
