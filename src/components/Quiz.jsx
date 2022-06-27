import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { generateQuestions } from "./questionGenerator";

export function Quiz() {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [isRightAnswer, setIsRightAnswer] = useState();
  const [questionsCount, setQuestionsCount] = useState(0);

  useEffect(() => {
    const generatedQuestions = generateQuestions();
    generatedQuestions.map((generatedQuestion) => {
      setQuestion(generatedQuestion.question);
      setAnswers(generatedQuestion.answers);
      setCorrectAnswer(generatedQuestion.correctAnswer);
    });
  }, [questionsCount]);

  const answered = (choosenAnswer) => {
    if (correctAnswer == choosenAnswer) {
      alert("correct");
      setIsRightAnswer(true);
    } else {
      alert("incorrect");
      setIsRightAnswer(false);
    }
  };

  return (
    <VStack zIndex={1} spacing={5} mt={"250"}>
      <Heading size="4xl">{question}</Heading>
      <HStack spacing={5}>
        {answers.map((answer, idx) => (
          <Button
            onClick={() => {
              answered(answer);
              setQuestionsCount(questionsCount + 1);
            }}
            key={idx}
            bgColor={"white"}
            color={"green"}
            size={"lg"}
          >
            {answer}
          </Button>
        ))}
      </HStack>
    </VStack>
  );
}
