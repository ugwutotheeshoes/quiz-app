import "../style/index.css";
import React, { useState } from "react";

const Questions = ({ quizQuestions }) => {
  const [finalResult, setFinalResult] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);
  // const [data, setData] = useState({ one: "", two: "", three: "", four: "" });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.innerText === quizQuestions[currentQuestion].answer) {
      console.log("answer is correct");
      setScore(score + 1);
    } else {
      console.log("answer is not correct");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(false);
    }
  };
  return (
    <div>
      {finalResult ? (
        <div className="questions">
          <div className="section-container">
            <h2>
              Questions {currentQuestion + 1} out of {quizQuestions.length}
            </h2>
            <p>{quizQuestions[currentQuestion].question}?</p>
            <div className="section">
              <button onClick={handleChange} name="one">
                {quizQuestions[currentQuestion].one}
              </button>
              <button onClick={handleChange} name="two">
                {quizQuestions[currentQuestion].two}
              </button>
              <button onClick={handleChange} name="three">
                {quizQuestions[currentQuestion].three}
              </button>
              <button onClick={handleChange} name="four">
                {quizQuestions[currentQuestion].four}
              </button>
            </div>
          </div>
          <button type="button" className="btn" onClick={handleSubmit}>
            Next &gt;
          </button>
        </div>
      ) : (
        <div className="final">
          <p>
            Your final score is {score} out of {quizQuestions.length}
          </p>
          <button type="button" onClick={() => window.location.reload()}>
            reset score!
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
