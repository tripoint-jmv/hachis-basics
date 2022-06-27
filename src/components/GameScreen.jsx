import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { generateQuestions } from "../core/utils/questionGenerator";
import Canvas from "../core/components/Canvas";
import { emotes } from "../scenes/emotes";

export default function GameScreen() {
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState();
  const [answeredCorrectly, setAnsweredCorrectly] = useState();
  const [questionsCount, setQuestionsCount] = useState(0);
  const [answeredRightCount, setAnsweredRightCount] = useState(0);
  const [answeredWrongCount, setAnsweredWrongCount] = useState(0);

  const answerEmote = (context) => {
    emotes(context, answeredCorrectly);
  };

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
      setAnsweredCorrectly(true);
      setAnsweredRightCount(answeredRightCount + 1);
    } else {
      setAnsweredCorrectly(false);
      setAnsweredWrongCount(answeredWrongCount + 1);
    }
  };

  return (
    <>
      <VStack zIndex={1} spacing={5} mt={"200"}>
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
      <VStack p={2}>
        <Text>Correct: {answeredRightCount}</Text>
        <Text>incorrect: {answeredWrongCount}</Text>
      </VStack>
      <Canvas draw={answerEmote} height="250" width="350" />
    </>
  );
}
