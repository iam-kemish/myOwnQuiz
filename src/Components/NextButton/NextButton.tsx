import React,{useState} from 'react'
import './NextButton.css'
interface btn {
    handleNext: React.MouseEventHandler;
    hasAnswered: boolean;
    numberOfQuestions: number;
    index: number;
    setGame: (game : string) => void;
    toggle: string
}
const NextButton:React.FC<btn> = ({handleNext,hasAnswered,numberOfQuestions,index,setGame,toggle}) => {
  const[btnD,setBtnD] = useState(false);

const handleEndBtn=()=>{
  setBtnD(true)
  setTimeout(() => {
    setGame("end")
  }, 1700);
}
 if(index < numberOfQuestions-1) {
    return (
        
            hasAnswered && <button className={`${toggle === "light"? " btn1Light" : "btn1"}`} onClick={handleNext}>Next</button>
          
      )
 } 
 if(index === numberOfQuestions-1) {
   return (
    hasAnswered && <button className={`${toggle === "light"? " btn1Light" : "btn1"}`} onClick={handleEndBtn}>{btnD? "Please hold...": "Finish"}</button>
   )
 }
}

// () => setGame("end")
export default NextButton
