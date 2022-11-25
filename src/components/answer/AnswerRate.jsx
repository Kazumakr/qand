import React from "react";

const AnswerRate = () => {
  return (
    <div className="flex justify-around">
      <div className="flex flex-col items-center">
        <h2 className="font-bold">Average</h2>
        <p>9.5/10</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold">Highest</h2>
        <p>10/10</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold">Lowest</h2>
        <p>6/10</p>
      </div>
    </div>
  );
};

export default AnswerRate;
