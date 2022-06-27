import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export const AudioPlayer = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <Button size={"md"} backgroundColor={"InfoBackground"} onClick={toggle}>
      {playing ? "Unmute" : "Mute"}
    </Button>
  );
};

export default AudioPlayer;
