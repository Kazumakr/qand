import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Filterbar from "../layout/Filterbar";

import Navbar from "../layout/Navbar";

import { getAllQuestions } from "../../context/question/QuestionAction";
import QuestionContext from "../../context/question/QuestionContext";
import QuestionCardSmall from "../questions/QuestionCardSmall";

const Home = () => {
  const { questions, dispatch } = useContext(QuestionContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      const questions = await getAllQuestions();
      dispatch({ type: "GET_ALL_QUESTIONS", payload: questions });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Filterbar />
      {questions.map((question) => (
        <Link to={`/question/${question.id}`} key={question.id}>
          <QuestionCardSmall question={question} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
