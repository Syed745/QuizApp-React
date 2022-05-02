import React, { useState } from 'react'


function Que() {


  const [currentQue, setCurrentQue] = useState(0)
  const [indexVal, setIndexVal] = useState(1)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)



  const questions = [
    {
      questionText: 'JS Stand for options ?',
      answerOptions: [
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'SQL', isCorrect: false },
        { answerText: 'JAVASCRIPT', isCorrect: true },
        { answerText: 'PHP', isCorrect: false },
      ],
    },
    {
      questionText: 'SQL Stand for options ?',
      answerOptions: [
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'Structured Query Language', isCorrect: true },
        { answerText: 'JAVASCRIPT', isCorrect: false },
        { answerText: 'PHP', isCorrect: false },
      ],
    },
    {
      questionText: 'CSS Stand for options ?',
      answerOptions: [
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'SQL', isCorrect: false },
        { answerText: 'Cascading Style Sheets.', isCorrect: true },
        { answerText: 'PHP', isCorrect: false },
      ],
    },
    {
      questionText: 'PHP Stand for options ?',
      answerOptions: [
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'SQL', isCorrect: false },
        { answerText: 'Hypertext Preprocessor.', isCorrect: true },
        { answerText: 'PHP', isCorrect: false },
      ],
    },
    {
      questionText: 'HTML Stand for options ? ',
      answerOptions: [
        { answerText: 'CSS', isCorrect: false },
        { answerText: 'SQL', isCorrect: false },
        { answerText: 'HyperText Markup Language', isCorrect: true },
        { answerText: 'PHP', isCorrect: false },
      ],
    },
  ];

  const handleButton = (isCorrect) => {
    console.log("isCorrect", isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    } else {

    }



    let nextQue = currentQue + 1;
    let controlQty = indexVal + 1;
    if (nextQue < questions.length) {
      setIndexVal(controlQty)
      setCurrentQue(nextQue)

    } else {
      setShowScore(true)
    }


  }
  return (

    <div className="container text-center shadow p-3 mb-5 bg-white rounded borderCss mt-5">
      <h1> ReactQuiz App </h1>
      {showScore ? (<div className="score-section">You scored {(score / questions.length) * 100} out of {questions.length * 20}</div>) : (<>
        <div className='question-section'>
          <div className='question-count'>
          <h5><span>Question {currentQue + 1}</span>/  {questions.length}</h5>
          </div>
          <div className='question-text'><h4>{questions[currentQue].questionText}</h4></div>
        </div>
        <div className='answer-section btn-group-vertical  w-25 '  role="group" aria-label="Vertical button group">
        {questions[currentQue].answerOptions.map((e, i) => (<button className='m-3 btn btn-primary' onClick={() => handleButton(e.isCorrect)} key={i}>{e.answerText}</button>))}
        </div>
<div className=" text-light text-center"><button className='btn btn-danger px-5 ' onClick={(e)=>handleButton(e.isCorrect)}>Next</button></div>
      </>)
      }
    </div>
  );
}


export default Que
