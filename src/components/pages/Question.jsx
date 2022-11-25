import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getQuestionAndAnswers } from "../../context/question/QuestionAction";
import QuestionContext from "../../context/question/QuestionContext";
import AnswerFormChooseMultiple from "../answer/AnswerFormChooseMultiple";
import AnswerFormChooseOne from "../answer/AnswerFormChooseOne";
import AnswerFormFreeInput from "../answer/AnswerFormFreeInput";
import AnswerFormRate from "../answer/AnswerFormRate";
import AnswerFormYesNo from "../answer/AnswerFormYesNo";
import Navbar from "../layout/Navbar";
import QuestionCard from "../questions/QuestionCard";

const Question = () => {
  const { question, answers, dispatch } = useContext(QuestionContext);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      const response = await getQuestionAndAnswers(params.id);
      dispatch({ type: "GET_QUESTION_AND_ANSWERS", payload: response });
    };
    fetchData();
  }, [dispatch, params.id]);

  const switchAnswerForm = (questionType, question) => {
    switch (questionType) {
      case 2:
        return <AnswerFormYesNo question={question} />;
      case 3:
        return <AnswerFormChooseOne question={question} />;
      case 4:
        return <AnswerFormChooseMultiple question={question} />;
      case 5:
        return <AnswerFormRate question={question} />;
      default:
        return <AnswerFormFreeInput question={question} />;
    }
  };

  return (
    <div>
      <Navbar />
      <QuestionCard question={question} answers={answers} />
      <h2 className="text-3xl font-bold">Your Answer</h2>
      {switchAnswerForm(question.questionType, question)}
    </div>
  );
};

export default Question;
