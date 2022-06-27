import { useContext } from "react";
import { Button, Container, Heading } from "@chakra-ui/react";
import { GameStateContext } from "../contexts/GameStateContext";

export default function StartButton(gameStarted) {
  const { setGameStarted } = useContext(GameStateContext);

  return (
    <Container mt={"200"} centerContent>
      <Heading size="3xl" p={5}>
        Hachi's Basics
      </Heading>
      <Button
        onClick={() => {
          setGameStarted(true);
        }}
        colorScheme="blue"
        size="lg"
      >
        Start Game
      </Button>
    </Container>
  );
}
