import React, {useEffect} from "react";
import "./QuizPlay.css";
import Progress from "../Progress/Progress";
import NextButton from "../NextButton/NextButton";
import Timer from "../Timer/Timer";
interface Question {
  correctOption: number;
  options: string[];
  points: number;
  question: string;
 
}
interface qns {
  questions: Question;
  optionChoosen: number | null;
  setOptionChoosen: (optionChoose: number | null) => void;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  handleNext: React.MouseEventHandler;
  index: number;
  numberOfQuestions: number;
  maximumPoints: number;
  setGame: (game : string) => void;
  correctAnswers: Question[];
  setCorrectAnswers: React.Dispatch<React.SetStateAction<Question[]>>;
  toggle: string;
}
const QuizPlay: React.FC<qns> = ({
  questions,
  setOptionChoosen,
  optionChoosen,
  score,
  setScore,
  handleNext,
  numberOfQuestions,
  index,
  maximumPoints,
  setGame,
  setCorrectAnswers,
  toggle
  
}) => {
 
  const hasAnswered = optionChoosen !== null;  

  useEffect(() => {
    if (optionChoosen === questions.correctOption) {
      setScore((prevScore: number)=> prevScore + questions.points);
      setCorrectAnswers((previousCorrectAnswer) => [...previousCorrectAnswer, questions])
    }
  }, [optionChoosen, questions,setScore,setCorrectAnswers]);

  return (
    <div>
       <Progress numberOfQuestions={numberOfQuestions} index={index} score={score} maximumPoints={maximumPoints}  toggle={toggle}/>
      <h4>{questions.question}</h4>
      <div className="options">
        {questions.options.map((option, index) => {
          // console.log(index)
          return (
            <button
            className={`${toggle === "light" ? "btnLght" : "btn"} btn-option ${
              index === optionChoosen ? `optionChoosen${toggle === "light" ? "light" : "nonLight"}` : ""
            } `}
            key={option}
            onClick={() => setOptionChoosen(index)}
            disabled={hasAnswered}
          >
              {option}
            </button>
          );
        })}
      </div>
     
      <Timer setGame={setGame} toggle={toggle}/>
      <NextButton hasAnswered={hasAnswered} handleNext={handleNext} numberOfQuestions={numberOfQuestions} index={index} setGame={setGame} toggle={toggle}/>
    </div>
  );
};

export default QuizPlay;
