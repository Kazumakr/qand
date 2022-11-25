import React, { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import CommentCard from "./CommentCard";
import AnswerChooseOne from "../answer/AnswerChooseOne";
import AnswerAnalytics from "../answer/AnswerAnalytics";
import AnswerChooseMultiple from "../answer/AnswerChooseMultiple";
import AnswerRate from "../answer/AnswerRate";
import AnswerYesNo from "../answer/AnswerYesNo";

const QuestionCard = ({ question, answers }) => {
  const {
    title,
    description,
    status,
    targets,
    createdAt,
    isAnonymous,
    username,
    questionType,
  } = question;

  const switchAnswer = (questionType) => {
    switch (questionType) {
      case 1:
        return <AnswerAnalytics />;
      case 2:
        return <AnswerYesNo />;
      case 3:
        return <AnswerChooseOne />;
      case 4:
        return <AnswerChooseMultiple />;
      case 5:
        return <AnswerRate />;
      default:
        return <h1>default</h1>;
    }
  };

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

        <div>
          <span className="font-semibold">Target</span>
          <p className="text-gray-300">{targets}</p>
        </div>

        {/* answer section */}
        <div className="text-sm text-gray-300">
          <span className="font-bold text-lg">{answers.length}</span> answers
        </div>

        {switchAnswer(questionType)}

        {/* comment section */}
        {answers.map((answer) => (
          <CommentCard key={answer.id} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
