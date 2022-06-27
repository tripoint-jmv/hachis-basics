import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Layout from "./core/components/Layout";
import { GameStateContext } from "./contexts/GameStateContext";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <Layout>
      <GameStateContext.Provider value={{ gameStarted, setGameStarted }}>
        <StartScreen />
      </GameStateContext.Provider>
    </Layout>
  );
}

export default App;
