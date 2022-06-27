import { getRandomInts, shuffledAnswers } from "./mathHelpers";

export const generateQuestions = () => {
  const answerArr = getRandomInts(50);

  // Getting first and second num is kinda gross but it works.
  const [firstNum, secondNum] = [
    Math.floor(Math.random() * answerArr[0]),
    Math.floor(Math.random() * answerArr[2]),
  ];
  let correctAnswer = firstNum + secondNum;
  const answers = shuffledAnswers(answerArr.concat(correctAnswer));

  const additionQuestion = `What is ${firstNum} + ${secondNum}?`;

  let questions = [
    {
      question: additionQuestion,
      correctAnswer: correctAnswer,
      answers: answers,
    },
  ];
  return questions;
};
