import React, { useContext, useEffect } from "react";
import Navbar from "../layout/Navbar";

import { Link, useSearchParams } from "react-router-dom";
import QuestionContext from "../../context/question/QuestionContext";
import { searchQuestions } from "../../context/question/QuestionAction";

import QuestionCardSmall from "../questions/QuestionCardSmall";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { questions, dispatch } = useContext(QuestionContext);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      const questions = await searchQuestions(searchParams.get("keyword"));
      dispatch({ type: "GET_ALL_QUESTIONS", payload: questions });
    };
    fetchData();
  }, [dispatch, searchParams]);

  return (
    <div>
      <Navbar placeholder={searchParams.get("keyword")} />
      <h2 className="font-bold text-lg">Results ({questions.length})</h2>
      {questions.map((question) => (
        <Link to={`/question/${question.id}`} key={question.id}>
          <QuestionCardSmall question={question} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
