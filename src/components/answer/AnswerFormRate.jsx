import React, { useState } from "react";

const AnswerFormRate = ({ question }) => {
  const [rate, setRate] = useState(null);

  const handleSubmit = () => {};
  const { maxRate } = question;

  return (
    <div className="card w-full bg-neutral shadow-xl text-primary-content my-8">
      <div className="card-body">
        <form
          className="flex flex-col space-y-3 items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold">Enter your answer</h2>
          <div className="text-center">
            <input
              type="number"
              placeholder="rate"
              className="input input-bordered w-1/2 max-w-xs text-neutral"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <span className="ml-3">/{maxRate}</span>
          </div>

          <textarea
            placeholder="Free comment"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            rows={5}
          ></textarea>
          <button type="submit" className="btn bg-primary-red self-end">
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnswerFormRate;
