import React from "react";

const AnswerChooseMultiple = () => {
  return (
    <div className="w-3/4 mx-auto my-3">
      <div className="flex items-center space-x-3 my-5">
        <h2 className="text-2xl font-bold">English</h2>
        <progress
          className="progress progress-success w-10/12"
          value="50"
          max="100"
        ></progress>
        <p className="text-lg font-bold">50%(5)</p>
      </div>
      <div className="flex items-center space-x-3 my-5">
        <h2 className="text-2xl font-bold">Spanish</h2>
        <progress
          className="progress progress-info w-10/12"
          value="20"
          max="100"
        ></progress>
        <p className="text-lg font-bold">20%(2)</p>
      </div>
      <div className="flex items-center space-x-3 my-5">
        <h2 className="text-2xl font-bold">French</h2>
        <progress
          className="progress progress-error w-10/12"
          value="20"
          max="100"
        ></progress>
        <p className="text-lg font-bold">20%(2)</p>
      </div>
      <div className="flex items-center space-x-3 my-5">
        <h2 className="text-2xl font-bold">Chinese</h2>
        <progress
          className="progress progress-primary w-10/12"
          value="10"
          max="100"
        ></progress>
        <p className="text-lg font-bold">10%(1)</p>
      </div>
    </div>
  );
};

export default AnswerChooseMultiple;
