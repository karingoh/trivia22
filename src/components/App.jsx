import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var currQuestionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question question={data[currQuestionNumber].question.text} />
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <div className="question">{props.question}</div>;
}

function NextQuestion(props) {
  function handleNextQuestion() {}
  return <button onclick={handleNextQuestion}>Next</button>;
}

export default App;
