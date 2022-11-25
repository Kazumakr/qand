import React from "react";

const AnswerFormFreeInput = () => {
  const handleSubmit = () => {};

  return (
    <div className="card w-full bg-neutral shadow-xl text-primary-content my-8">
      <div className="card-body">
        <form
          className="flex flex-col items-center space-y-3"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold">Enter your answer</h2>
          <input
            placeholder="Enter your answer"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            required
          />
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

export default AnswerFormFreeInput;
