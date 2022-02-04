import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var currQuestionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question question={data[currQuestionNumber].question.text} />
    </div>
  );
}

function Question(props) {
  return <div className="question">{props.question}</div>;
}

export default App;
