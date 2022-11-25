import { createContext, useReducer } from "react";
import questionReducer from "./QuestionReducer";

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const initialState = {
    questions: [],
    question: {},
    answers: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(questionReducer, initialState);

  return (
    <QuestionContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionContext;
