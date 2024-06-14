import React, { useState } from "react";

import "./App.css";
import Questions from "./components/Questions.jsx";

function App() {
  const questionAnswer = [
    {
      id:1,
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      answer: "Paris",
    },
    {
      id:2,
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "Stephen King",
        "J.K. Rowling",
        "Ernest Hemingway",
      ],
      answer: "Harper Lee",
    },
    {
      id:3,
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Fe", "Cu"],
      answer: "Au",
    },
  ];

  

  // console.log(questionAnswer.length)
  
  return (
    <>
      <h1 className="flex items-center justify-center text-2xl font-semibold" >Quiz app</h1>
      <Questions questions={questionAnswer}  />
    </>
  );
}

export default App;
