const questionReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case "GET_QUESTION":
      return {
        ...state,
        question: action.payload,
        loading: false,
      };
    case "GET_QUESTION_AND_ANSWERS":
      return {
        ...state,
        question: action.payload.question,
        answers: action.payload.answers,
        loading: false,
      };
    case "ADD_QUESTION":
      return {
        ...state,
        questions: [...state.questions, action.payload],
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default questionReducer;
