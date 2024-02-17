import React from "react";
import VideoBox from "./VideoBox";
import ContentBox from "./ContentBox";
import PromptBox from "./PromptBox";
import Quiz from "./Quiz";

const MainScreen = () => {
  return (
    <div>
      <h1>Quiz App</h1>
      <VideoBox />
      <ContentBox />
      <PromptBox />
      <Quiz />
    </div>
  );
};

export default MainScreen;