import AnswerData from "../../data/AnswersData";
import QuestionData from "../../data/QuestionData";
// Get all questions
export const getAllQuestions = async () => {
  return QuestionData;
};

// Get question
export const getQuestion = async (id) => {
  return QuestionData.filter((question) => question.id === parseInt(id))[0];
};

// Get question and answers
export const getQuestionAndAnswers = async (id) => {
  const [question, answers] = await Promise.all([
    QuestionData.filter((question) => question.id === parseInt(id))[0],
    AnswerData.filter((answer) => answer.questionId === parseInt(id)),
  ]);

  console.log("A", answers);
  return { question: question, answers: answers };
};

// Add new question
export const addQuestion = async () => {};

// Get search results
export const searchQuestions = async (text) => {
  return QuestionData;
};
