import React from 'react'
import './Progress.css'
 interface progres {
    index: number;
    numberOfQuestions: number;
    score: number;
    maximumPoints: number;
    toggle: string;
 }
const Progress:React.FC<progres> = ({numberOfQuestions, index, score,toggle}) => {
  return (
    <div>
      <progress max={numberOfQuestions} value={index + Number(score !== null)} style={{width: "100%", marginBottom: "1rem"}} />
     <header className="progress">
      <p className={`${toggle === "light"? "light" : ""}`}>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>

    </header>
    </div>
  )
}

export default Progress
