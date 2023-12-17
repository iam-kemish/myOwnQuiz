import React from 'react'
import './StartScreen.css'
interface Quiz {
    setGame: (game : string) => void;
    toggle: string;
    
    handleToggle: React.MouseEventHandler;
}
const StartScreen:React.FC<Quiz> = ({ setGame,toggle,handleToggle}) => {
  
  
  return (
    <div>
        <div className="start">

<button onClick={ handleToggle} className={`${toggle === "light"? "btnLght" : "btn"} btn-ui ToPosition` }>{toggle === "light"? "Dark mode" : "Light Mode"}</button>
      <h2>Welcome to My own quiz</h2>
      <h3>lets see how much would you score🙃 </h3>
      <h4>Your results will be displayed at last. Including your score. Goodluck.😉</h4>
      <button
        className={`${toggle === "light"? "btnLght" : "btn"} btn-ui`} onClick={() => setGame("quiz")} >
        Let's start
      </button>
    </div>
    </div>
  )
}

export default StartScreen
