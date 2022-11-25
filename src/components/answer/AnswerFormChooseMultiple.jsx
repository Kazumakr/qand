import React, { useState } from "react";

const AnswerFormChooseMultiple = ({ question }) => {
  const [checkedValue, setCheckedValue] = useState([]);
  const handleSubmit = () => {};

  console.log(question);
  const { selectOptions } = question;

  return (
    <div className="card w-full bg-neutral shadow-xl text-primary-content my-8">
      <div className="card-body">
        <form
          className="flex flex-col space-y-3 items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold">Choose Your Answers</h2>
          <div>
            <ul className="flex w-full space-x-5">
              {selectOptions.map((option, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`${option}-${index}`}
                    value={option}
                    className="hidden peer"
                    required=""
                    onChange={(e) =>
                      setCheckedValue([...checkedValue, e.target.value])
                    }
                    checked={checkedValue.includes(option)}
                  />
                  <label
                    htmlFor={`${option}-${index}`}
                    className="inline-flex justify-between items-center py-5 px-10 w-full text-gray-500 bg-gray-400 rounded-full border-2 border-gray-200 cursor-pointer  hover:text-gray-600  peer-checked:text-gray-600 peer-checked:bg-white hover:bg-gray-50 "
                  >
                    <div className="w-full text-lg font-semibold">{option}</div>
                  </label>
                </li>
              ))}
            </ul>
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

export default AnswerFormChooseMultiple;
