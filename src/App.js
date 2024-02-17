// App.js
import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  const [promptText, setPromptText] = useState('');
  const [userInput, setUserInput] = useState('');

  const submitUserInput = () => {
    setPromptText(userInput);
  };

  return (
    <div className="main-screen">
      <video id="video-box" width="640" height="360" controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-box">
        <p id="prompt-box">{promptText}</p>
        <div id="quiz">
          <button id="prev">Prev</button>
          <p id="question">Question 1: What is the capital of France?</p>
          <button id="option1">Paris</button>
          <button id="option2">Berlin</button>
          <button id="option3">London</button>
          <button id="option4">Madrid</button>
          <button id="next">Next</button>
        </div>
      </div>

      {/* Additional quiz content */}
      <div id="final-score" className="hidden">
        <h2>Final Score</h2>
        <p id="final-score-value"></p>
        <button id="back-to-main">Back to Main Screen</button>
      </div>

      <div id="review-questions" className="hidden">
        <h2>Review Questions</h2>
        {/* Add review question elements here */}
        <button id="back-to-main">Back to Main Screen</button>
      </div>

      <div id="answers" className="hidden">
        <h2>Answers</h2>
        {/* Add answer elements here */}
        <button id="back-to-main">Back to Main Screen</button>
      </div>

      <div id="user-input-box">
        <input
          type="text"
          id="user-input"
          placeholder="Type here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button id="submit-input" onClick={submitUserInput}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
