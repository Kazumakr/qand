import React, { useContext, useState } from "react";
import Navbar from "../layout/Navbar";

import { Link, useNavigate } from "react-router-dom";
import QuestionContext from "../../context/question/QuestionContext";

const Create = () => {
  const { dispatch } = useContext(QuestionContext);

  const [type, setType] = useState(null);
  const [newOption, setNewOption] = useState("");
  const [options, setOptions] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setType(parseInt(e.target.value));
  };

  const addOption = () => {
    setOptions([...options, newOption]);
    setNewOption("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: 4,
      status: "public",
      title,
      description,
      numberOfAnswers: 0,
      targets: target,
      createdAt: "2022/11/21",
      isAnonymous,
      username: null,
      questionType: type,
      selectOptions: options,
    };
    //api
    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "ADD_QUESTION", payload: data });

    //redirect to home
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="bg-neutral shadow-xl w-full rounded-xl px-8 py-8 text-primary-content">
        <h1 className="font-bold text-3xl">Create Question</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="form-control my-5">
            <label
              className="flex items-center text-xl font-bold mb-2"
              htmlFor="title"
            >
              Title
              <span className="text-gray-300 font-light text-sm ml-5">
                Required
              </span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="title"
              type="text"
              placeholder="Question title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-control my-5">
            <label
              className="flex items-center text-xl font-bold mb-2"
              htmlFor="description"
            >
              Description
              <span className="text-gray-300 font-light text-sm ml-5">
                Required
              </span>
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="description"
              placeholder="Question description"
              rows={5}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-control my-5">
            <label
              className="flex items-center text-xl font-bold mb-2"
              htmlFor="targets"
            >
              Target
              <span className="text-gray-300 font-light text-sm ml-5">
                Optional
              </span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              id="targets"
              type="text"
              placeholder="e.g)Software Engineer, woman, 20s"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
          <div className="form-control my-5">
            <label className="cursor-pointer flex items-center space-x-5">
              <p className="text-xl font-bold text-primary-content">
                Create as Anonymous
                <span className="text-gray-300 font-light text-sm ml-5">
                  Optional
                </span>
              </p>
              <input
                type="checkbox"
                checked={isAnonymous}
                className="toggle toggle-error bg-gray-400"
                onChange={() => setIsAnonymous(!isAnonymous)}
              />
            </label>
          </div>
          <div className="form-control my-5">
            <label
              className="flex items-center text-xl font-bold mb-2"
              htmlFor="type"
            >
              Question Type
              <span className="text-gray-300 font-light text-sm ml-5">
                Required
              </span>
            </label>
            <select
              id="type"
              className="max-w-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
              onChange={handleChange}
            >
              <option defaultValue={null}>Select question type</option>
              <option value={1}>Free input answer</option>
              <option value={2}>Yes/No</option>
              <option value={3}>Choose one answer</option>
              <option value={4}>Choose multiple answers</option>
              <option value={5}>Rate</option>
            </select>
          </div>
          {(type === 3 || type === 4) && (
            <>
              <div>
                <label
                  className="flex items-center text-xl font-bold mb-2"
                  htmlFor="select-options"
                >
                  Select Options
                  <span className="text-gray-300 font-light text-sm ml-5">
                    Required
                  </span>
                </label>
                <input
                  id="select-options"
                  type="text"
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                />
                <button
                  onClick={addOption}
                  className="btn bg-gray-100 text-black"
                  type="button"
                >
                  Add
                </button>
              </div>
              <div>
                <ul>
                  {options.map((option, index) => (
                    <li key={index}>
                      Option {index + 1}: {option}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
          {type === 5 && (
            <div>
              <label
                className="flex items-center text-xl font-bold mb-2"
                htmlFor="max-rate"
              >
                Max Rate
                <span className="text-gray-300 font-light text-sm ml-5">
                  Required
                </span>
              </label>
              Out of{" "}
              <input
                id="max-rate"
                type="number"
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight"
              />
            </div>
          )}
          <div className="flex self-end justify-between space-x-5 mx-5 mb-5">
            <Link to="/">
              <button type="button" className="btn bg-gray-300">
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn bg-primary-red">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
