import "../style/index.css";
import React, { useState } from "react";
import Questions from "./Questions";
import { Client, Databases } from "appwrite";

export default function Index() {
  const [quizQuestions, setQuizQuestions] = useState([""]);
  const [toShow, setToShow] = useState(true);

  const client = new Client();
  const databases = new Databases(client);
  client
    .setEndpoint("http://localhost/v1") // Your API Endpoint
    .setProject("639e28517aca501db710"); // Your project ID
  const promise = databases.listDocuments(
    "639e2ab057c1dd4051fc",
    "639e2bb7774fc4f71407"
  );

  const updateData = () => {
    promise.then(
      function (response) {
        setQuizQuestions(response.documents);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    setToShow(false);
  };

  return (
    <div>
      {toShow ? (
        <div className="container">
          <h1>Remix Science Quiz App</h1>
          <p>
            Easy learning with 10th grade science questions and answers that
            covers all the important topics.
          </p>
          <button className="quiz-btn" onClick={updateData}>
            start quiz
          </button>
        </div>
      ) : (
        <Questions quizQuestions={quizQuestions} />
      )}
    </div>
  );
}
