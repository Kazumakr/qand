import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const CommentCard = ({ answer }) => {
  const [isReadMore, setIsReadMore] = useState(null);
  const commentLimit = 250;

  const { id, username, isAnonymous, createdAt, inputAnswer, selectedAnswer } =
    answer;

  const toggleReadMore = (id) => {
    if (isReadMore === id) {
      setIsReadMore(null);
    } else {
      setIsReadMore(id);
    }
  };

  return (
    <div className="grid grid-cols-4 border-t-2 border-gray-400 py-6">
      <div className="flex col-span-1 justify-center space-x-3 items-center">
        <UserCircleIcon className="w-10 h-10" />
        <div>
          <p>Anonymous</p>
          <p className="text-xs font-thin text-gray-300">{createdAt}</p>
        </div>
      </div>
      <div className="col-span-3 flex flex-col space-y-2">
        <p className="font-bold">
          {inputAnswer ? inputAnswer : selectedAnswer[0]}
        </p>
        <div>
          {answer.comment ? (
            <div className=" text-sm font-light">
              {isReadMore === id
                ? answer.comment
                : answer.comment.substr(0, commentLimit) + "..."}
              <span
                className="text-sky-400 ml-2"
                onClick={() => toggleReadMore(id)}
              >
                {isReadMore !== id ? "Read More" : "Read Less"}
              </span>
            </div>
          ) : (
            <p className=" text-sm font-light">No comment</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
