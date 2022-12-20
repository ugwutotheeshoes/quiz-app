import "../style/index.css";
import React, { useState } from "react";

const Questions = ({ menuItems }) => {
  const [finalResult, setFinalResult] = useState(true);
  const [isCorrect, setIsCorrect] = useState(true);
  // const [data, setData] = useState({ one: "", two: "", three: "", four: "" });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.innerText === menuItems[currentQuestion].answer) {
      console.log("answer is correct");
      setScore(score + 1);
    } else {
      console.log("answer is not correct");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentQuestion + 1 < menuItems.length) {
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
              Questions {currentQuestion + 1} out of {menuItems.length}
            </h2>
            <p>{menuItems[currentQuestion].question}?</p>
            <div className="section">
              <button onClick={handleChange} name="one">
                {menuItems[currentQuestion].one}
              </button>
              <button onClick={handleChange} name="two">
                {menuItems[currentQuestion].two}
              </button>
              <button onClick={handleChange} name="three">
                {menuItems[currentQuestion].three}
              </button>
              <button onClick={handleChange} name="four">
                {menuItems[currentQuestion].four}
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
            Your final score is {score} out of {menuItems.length}
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
