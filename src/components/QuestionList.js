import React from "react";
import { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDeleteQuestion, updateQuestion}) {
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion} updateQuestion={updateQuestion}/>
        })}
    </ul>
    </section>
  );
}

export default QuestionList;
