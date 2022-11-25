import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const QuestionCardSmall = ({ question }) => {
  const {
    title,
    description,
    numberOfAnswers,
    status,
    targets,
    createdAt,
    isAnonymous,
    username,
  } = question;

  return (
    <div className="card w-full bg-neutral shadow-xl text-primary-content my-8">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div className="badge badge-outline text-primary-red">{status}</div>
          <div className="flex flex-col items-end">
            {isAnonymous ? (
              <div className="flex space-x-1">
                <UserCircleIcon className="h-6 w-6" />
                <p>Anonymous</p>
              </div>
            ) : (
              <div className="flex space-x-1">
                <UserCircleIcon className="h-6 w-6" />
                <p>{username}</p>
              </div>
            )}
            <p className="font-thin text-gray-300">{createdAt}</p>
          </div>
        </div>
        <h2 className="card-title">Q. {title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
        <div className="flex justify-between items-end">
          <div>
            <span className="font-semibold">Target</span>
            <p className="text-gray-300">{targets}</p>
          </div>
          <div className="text-sm text-gray-300">
            <span className="font-bold text-lg">{numberOfAnswers}</span> answers
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCardSmall;
