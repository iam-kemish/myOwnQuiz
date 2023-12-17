import React,{useEffect,useState} from 'react'
import './Timer.css'
interface timerr {
    setGame: (game: string) => void;
    toggle: string
}
const Timer:React.FC<timerr> = ({setGame,toggle}) => {
 const[tick,setTick] = useState(320);

 const minutes = Math.floor(tick / 60);
 const seconds = tick % 60;
 useEffect(() =>{
 const id =  setInterval(() =>{
    if(tick > 0) {
        setTick(tick - 1)
       }else {
      setGame("end")
       }
  },1000)
  return () => clearInterval(id)
 })
  return (
   <>
    <div className="timer">
    <p className={`${toggle === "light"? "light": ""}`}> {minutes} : {seconds} minutes left.</p>
    </div>
   </>
  )
}

export default Timer
